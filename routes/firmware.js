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
    
    //res.send('REGISTER');
    let newFirmware = new Firmware({
        name: req.body.name,
        description: req.body.description,
        version: { main:req.body.version.main,  secondary: req.body.version.secondary},
        isPublic: req.body.isPublic,       
        link: req.body.link,
        group: req.body.group,
        device:  req.body.device,
        esp: [req.body.esp._id],
        owner: req.body.owner._id
    });
    //console.log(newEsp);  
        //check Uniqueness of name /version
        Firmware.getFirmwaresByName(newFirmware.name, function(err, firmwares){ 
            if(err) console.log(err);
            if(firmwares){
                firmwares.forEach(firm => {
                    if(newFirmware.version.main == firm.version.main &&
                         newFirmware.version.secondary == firm.version.secondary){
                        res.json({success: false, msg:'This secret is already in use...'});
                        return ;
                    }
                });
                //register firmware      
                console.log("registering firmware");
                Firmware.addFirmware(newFirmware, (err, esp) => {
                    if(err){
                        res.json({success: false, msg:err});
                    }else {                    
                        //this.UpdateUserWithEsp(User.getUserById(newEsp.owner[0]),esp._id);
                        Esp.getEspBySecret(req.body.esp.secret, function(err, esp){ 
                            if(err) console.log(err);
                            esp.firmware = newFirmware;
                            Esp.updateEsp(esp , function(err , user){ 
                                if(err) console.log(err);
                                res.json({success: true, msg:'The firm is now registered!!!'});
                                
                            });                      
                        });
                       
                    }
                });    
            }              
            
        });
    
});


router.post('/update', passport.authenticate('jwt' , {session:false}), (req, res, next) => {   
       
    //check Secret
    Firmware.getFirmwareById(req.body._id, function(err, firmware){ 
        if(err) console.log(err);        
            //Update firmware    
            firmware.name = req.body.name;
            firmware.description = req.body.description;
            firmware.isPublic = req.body.isPublic;
            firmware.link = req.body.link;
            firmware.version.main = req.body.version.main;
            firmware.version.secondary = req.body.version.secondary;
            firmware.esp.push(req.body.esp._id);//push

            Firmware.updateFirmware(firmware, (err, esp) => {
                if(err){
                    res.json({success: false, msg:err});
                }else {                    
                    res.json({success: true, msg:'The firmware is now updated!!!'});
                }
            }); 
        
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
router.get('/groups', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    console.log("got inside /firmware/groups");
    Firmware.getAllFirmwaresDistinctByGroup( function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({groups: firmware});
        }
    });
});

router.post('/groupNames', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmOfGroupDistinctByName(req.body.group , function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({names: firmware});
        }
    });
});

router.post('/groupNameDevices', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmOfGroupAndNameDistinctByDevice(req.body.group , req.body.name , function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({devices: firmware});
        }
    });
});

router.post('/groupNameDeviceVersions', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    Firmware.getFirmOfGroupAndNameAndDevice(req.body.group , req.body.name ,req.body.device, function(err, firmware){ 
        if(err) console.log(err);        
        if(firmware){            
            res.json({verions: firmware});
        }
    });
});
