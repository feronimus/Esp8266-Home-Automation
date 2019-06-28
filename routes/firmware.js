const express = require('express');
const router =  express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User =  require('../models/user');
const Esp =  require('../models/esp');
const Firmware =  require('../models/firmware');
const multer = require('multer');
const MqtHandler = require('../MqttServer/mqtt_handler');


module.exports = router;

router.post('/register', passport.authenticate('jwt' , {session:false}), (req, res, next) => {   
                 
    console.log(req.body.buttons.length);
    //console.log(req.body.buttons.length);
    //res.send('REGISTER');
    let newFirmware = new Firmware({
        name: req.body.name,
        description: req.body.description,
        version: { main:req.body.version.main,  secondary: req.body.version.secondary},
        versionReadable : req.body.version.main +'.'+req.body.version.secondary,
        isPublic: req.body.isPublic,       
        link: req.body.link,
        group: req.body.group,
        device:  req.body.device,
        esp: [],
        code: req.body.code,
        owner: req.body.owner,
        buttons: req.body.buttons,
        Sliders: req.body.Sliders,
    });    
        //check Uniqueness of name /version
        Firmware.getFirmwaresByName(newFirmware.name, function(err, firmwares){ 
            if(err) console.log(err);
            if(firmwares){
                let flag =true;
                firmwares.forEach(firm => {
                    if(newFirmware.version.main == firm.version.main &&
                        newFirmware.version.secondary == firm.version.secondary){
                            flag=false;                        
                    }
                });
                //register firmware    
                if(flag){
                    //Find and inster owner name
                    User.getUserById(req.body.owner, (err, user) => {
                        if(err) { console.log(err); throw err;}
                        if(user){
                            newFirmware.ownerName = user.name; 
                            Firmware.addFirmware(newFirmware, (err, esp) => {
                                if(err){
                                    console.log(err); 
                                    res.json({success: false, msg:err});
                                }else {           
                                
                                    res.json({success: true, msg:'The Firmware is now registered!!!'});
                                }
                            });   
                        }
                    });

                   
                }else {
                    res.json({success: false, msg:'This firmware with this version already exists...'});
                }
              
            }              
            
        });
    
});
  /*     
                            if(!req.body.esp)return;
                            Esp.getEspBySecret(req.body.esp.secret, function(err, esp){ 
                                if(err) console.log(err);
                                esp.firmware = newFirmware._id;
                                //if(req.body.forceUpdate)esp.forceUpdate=true;
                                if(req.body.forceUpdate)  MqtHandler.sendMessage(esp.secret,"{\"ForceUpdate\":\"true\",\"link\":\""+newFirmware.link+"\"}")
                                Esp.updateEsp(esp , function(err , user){ 
                                    if(err) console.log(err);
                                    res.json({success: true, msg:'The firm is now registered!!!'});
                                    
                                });                      
                            });
                            */
//Check if user is owner
router.post('/update', passport.authenticate('jwt' , {session:false}), (req, res, next) => {   
       
   
    //check Secret
    Firmware.getFirmwareById(req.body._id, function(err, firmware){ 
        if(err) console.log(err);        
            //Update firmware    
            firmware.name = req.body.name;
            firmware.description = req.body.description;
            firmware.link = req.body.link;
            firmware.group = req.body.group;
            firmware.device = req.body.device;
            firmware.version.main = req.body.version.main;
            firmware.version.secondary = req.body.version.secondary;
            firmware.isPublic = req.body.isPublic;
            firmware.code = req.body.code;
            firmware.buttons = req.body.buttons;          
            if(String(firmware.owner) != String(req.body.owner)){
                res.json({success: false, msg:'Did you just tried to update someone elses Firmware?  Shame...'});
                return;
            }
            Firmware.updateFirmware(firmware, (err, firm) => {
                if(err){
                    res.json({success: false, msg:err});
                }else { 
                    res.json({success: true, msg:'The firm is now updated!!!'});
                 }//update esp that i sent tha it has me
            }); 
        
    });  
           
});
//MqtHandler.sendMessage(esp.secret,"{\"ForceUpdate\":\"true\",\"link\":\""+firmware.link+"\"}")
   

router.post('/delete', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
     Firmware.getFirmwareById(req.body._id, (err, firm) =>{
         //check  this device belongs to you
         if(String(firm.owner) != String(req.user._id)){
             res.json({success: false, msg:'This device does not belong to you.'});
             return;
         }else{             
             // Remove esp from User and esps 
             Firmware.removeFirmware(req.body._id, (err) =>{
                 if(err) throw err;                
                 res.json({success: true, msg:'Firmware removed.'});
             });           
         };
     });
 });
 

// Get data about this Firmware
router.post('/profileById', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmwareById(req.body._id, function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({firmware: firmware});
        }
    });
});


// Get data about this Firmware
router.post('/groups', passport.authenticate('jwt' , {session:false}), (req, res, next) => {    
    Firmware.getAllFirmwaresDistinctByGroup( req.body._id ,function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({groups: firmware});
        }
    });
});

router.post('/groupNames', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmOfGroupDistinctByName( req.body._id ,req.body.group , function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({names: firmware});
        }
    });
});

router.post('/groupNameDevices', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmOfGroupAndNameDistinctByDevice( req.body._id ,req.body.group , req.body.name , function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({devices: firmware});
        }
    });
});

router.post('/groupNameDeviceVersions', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmOfGroupAndNameAndDevice( req.body._id ,req.body.group , req.body.name ,req.body.device, function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({verions: firmware});
        }
    });
});

router.get('/DistinctDevices', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getDevices( function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({devices: firmware});
        }
    });
});

router.post('/id', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmwareById(req.body._id, function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({firmware: firmware});
        }
    });
});

router.get('/user', passport.authenticate('jwt' , {session:false}), (req, res, next) => {   
    Firmware.getFirmwareByUser(req.user._id, function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){                  
            res.json({firmware: firmware});
        }
    });
});

