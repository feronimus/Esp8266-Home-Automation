const express = require('express');
const router =  express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User =  require('../models/user');
const Esp =  require('../models/esp');
const multer = require('multer');
const Firmware =  require('../models/firmware');
const MqtHandler = require('../MqttServer/mqtt_handler');


//

//Update to make message from firmware
module.exports.HandleMqttMessage = function(topic, Message, packet){
    if(!Message) return;
    //Send all info as esp startup
    if(Message == "START"){ 
        Esp.getEspBySecret(topic, (err,newEsp) =>{            
            if(err) {res.json({success: false, msg:err}); return;}
            if(!newEsp)return; 
            newEsp.buttons.forEach(button => {                 
                setTimeout(function(){
                    MqtHandler.sendMessage(topic,button.message); 
                }, 300);
            });  
              
        });
    }
}




module.exports = router;
var message = "";;
// Register
router.post('/register', passport.authenticate('jwt' , {session:false}), (req, res, next) => {      
    let newEsp = new Esp({       
        name: req.body.name,
        description: req.body.description,
        secret: req.body.secret,
        group: req.body.group,
        owner: req.body.owner,
        isOnline: 0,
        viewOrder: -1,
        eventSheduler: { },//event object
        timer: -1,
        version: 0.1,
        forceUpdate: req.body.forceUpdate ,  
        firmware:    req.body.firmware,     
        buttons: req.body.buttons
    });    
    //check Secret
    Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
        if(err) console.log(err);
        if(secret){
            res.json({success: false, msg:'This secret is already in use...'});
            return ;
        }else{
           
         

                //register esp              
                MqtHandler.subscribe(newEsp.secret);
                 //Update esp Buttons
                 /*
                 newEsp.buttons.splice(0,newEsp.buttons.length)
                 firm.buttons.forEach(button => {                     
                     newEsp.buttons.push({id : button._id, message:""});
                 });   
                 */            
                Esp.addEsp(newEsp, (err, esp) => {
                    if(err){
                        res.json({success: false, msg:err});
                    }else {   
                        //Update Firmware
                        Firmware.getFirmwareById(newEsp.firmware , function(err , firm){
                            firm.esp.push(esp._id);
                            Firmware.updateFirmware(firm, function(err){ 
                                if(esp.forceUpdate) MqtHandler.sendMessage(newEsp.secret, "{ ForceUpdate : true , link :"+firm.link+"}" );                
                            });                 
                        //Update user
                        User.getUserById(newEsp.owner[0] , function(err , user){                            
                            user.esp.push(esp._id);
                            User.updateUser(user, function(err){
                                res.json({success: true, msg:'The Esp device is now registered under your acount!!!'});                              
                
                            });  
                        });  
                    });                               
                }         
            }); 
        }
    });    
});

router.post('/update', passport.authenticate('jwt' , {session:false}), (req, res, next) => {      
    let newEsp = new Esp({       
        name: req.body.name,
        description: req.body.description,
        secret: req.body.secret,
        group: req.body.group,
        owner: req.body.owner,
        isOnline: 0,
        viewOrder: -1,
        eventSheduler: { },//event object
        timer: -1,
        version: 0.1,
        forceUpdate: req.body.forceUpdate , 
        firmware: req.body.firmware, 
        _id : req.body._id,  
        buttons: req.body.buttons
    });
    //check Secret
    Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
        if(err) console.log(err);
        if(secret && String(secret._id) != String(newEsp._id)){
            res.json({success: false, msg:'This secret is already in use...'});
            return ;
        }else{
            //Check if this is your device.
            Esp.getEspById(newEsp._id, function(err, oldesp){
                if(err) console.log(err);
                if(!oldesp) {
                    res.json({success: false, msg:'Something went wrong...'});
                    return;
                }   
                if(String(oldesp.owner[0]) != String(newEsp.owner[0])){
                    res.json({success: false, msg:'Did you just tried to update someone elses device?  Shame...'});
                    return;
                }
                 //Update Old Firmware
                 Firmware.getFirmwareById(oldesp.firmware , function(err , oldfirm){                   
                    for( var i = 0; i < oldfirm.esp.length; i++){ 
                        if ( String(oldfirm.esp[i]) === String(oldesp._id)) {
                            oldfirm.esp.splice(i, 1); 
                            i--;
                        }
                     }    
                    Firmware.updateFirmware(oldfirm, function(err){
                        //Update new Firmware 
                        Firmware.getFirmwareById(newEsp.firmware , function(err , firm){
                            firm.esp.push(newEsp._id);
                            Firmware.updateFirmware(firm, function(err){ 
                                //Update esp    
                                MqtHandler.subscribe(newEsp.secret);
                                //Update esp Buttons
                                  /*
                                newEsp.buttons.splice(0,newEsp.buttons.length)
                                firm.buttons.forEach(button => {
                                    newEsp.buttons.push({id : button._id, message:""});
                                });  
                                */
                                Esp.updateEsp(newEsp, (err, esp) => {
                                    if(err){
                                        res.json({success: false, msg:err});
                                    }else {  
                                        console.log(esp.forceUpdate); 
                                        if(esp.forceUpdate) MqtHandler.sendMessage(esp.secret, "{ ForceUpdate : true , link :"+firm.link+"}" );             
                                        res.json({success: true, msg:'The Esp device is now updated!!!'});
                                    }
                                }); 
                            });
                        });                             
                    });
                });
            });             
        }
    });          
});


// Updates and handles messages to be send to devices's
router.post('/signal', passport.authenticate('jwt' , {session:false}), (req, res, next) => { 
    Esp.getEspById(req.body.id, (err, esp) => {
        if(err){
            res.json({success: false, msg:err});
        }else {  
            //check  this device belifongs to you
            if(String(esp.owner[0]) != String(req.user._id)){
                res.json({success: false, msg:'This device does not belong to you.'});
                return;
            }
            //Update Device messages
            esp.buttons.forEach(button => {
                if(req.body.buttonID == button.id) button.message = req.body.message;
            });
            Esp.updateEsp(esp, (err, esp) => { 
                if(err){
                    res.json({success: false, msg:err});
                }else {  
                    MqtHandler.sendMessage(esp.secret,req.body.message);      
                    let msg = "Turned ";
                    if(req.body.status == "true") msg += "ON";   
                    else  msg += "OFF";   
                    res.json({success: true, msg:msg});
                }
            });            
        }
    });
});


//populate esps of user
 router.get('/esps', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    
    User.getEspsOfUser(req.user._id, (err, esps) =>{
        if(err) console.log(err);
        if(esps){            
            res.json({esps: esps[0]});
        }
    });   
 });  

// Authenticate If exists and if user can see it 
router.post('/authenticate', (req, res, next) => {
    //const user = req.body.user;
    const secret = req.body.secret;
    
    Esp.getEspBySecret(secret, (err, esp) =>{
        if(err) throw err;
        if(!esp){
            return res.json({success: false, msg: 'esp not registered'});
        }  
        //handle data
        //....
        //respond
        var d = new Date();
        var t= d.getTime()/ 1000 ;
        esp.isOnline = t ;// how many seconds have passed since 1970/01/01
        Esp.updateEsp(esp, (err, esp) => {});
        
        res.json({
            success: true,
            D0 : esp.pins.D0.IsHight,
            D1 : esp.pins.D1.IsHight,
            D2 : esp.pins.D2.IsHight,
            D3 : esp.pins.D3.IsHight,
            D4 : esp.pins.D4.IsHight,
            D5 : esp.pins.D5.IsHight,
            D6 : esp.pins.D6.IsHight,
            D7 : esp.pins.D7.IsHight,
            D8 : esp.pins.D8.IsHight,
            D9 : esp.pins.D9.IsHight,
            D10 : esp.pins.D10.IsHight,
            A0 : esp.pins.A0.value            
        })
    })
});

// Get data about this esp
router.get('/profile', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    //res.send('PROFILE');
    res.json({user: req.user});
});


//TO BE DONE NOT READY
//unplemented
router.post('/delete', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    //res.send('PROFILE');
    MqtHandler.unsubscribe(newEsp.secret);    
    res.json({user: req.user});
});
//----------- Upload-downalod files .bin codes -----------\\




router.post('/espuploads',  (req, res, next) =>{
    var store = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null, './../uploads');
        },
        filename:function(req,file,cb){
            cb(null, Date.now()+'.bin');
        }
    });
    
    var upload = multer({storage:store}).single('file');
    
    console.log('got inside esp uploads');
    upload(req,res,(err)=>{
        if(err) return res.status(501).json({error:err});
        res.json(req.file.filename);
    });
});



