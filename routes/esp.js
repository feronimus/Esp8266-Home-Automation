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
            if(err) {res.json({success: false, msg:err});}
            if(!newEsp)return;
            //Create message
            let message = "{"
            message += "\"D0\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D1\":\""+ newEsp.pins.D1.IsHight +"\",";
            message += "\"D2\":\""+ newEsp.pins.D2.IsHight +"\",";
            message += "\"D3\":\""+ newEsp.pins.D3.IsHight +"\",";
            //message += "\"D4\":\""+ newEsp.pins.D4.IsHight +"\",";
            message += "\"D5\":\""+ newEsp.pins.D5.IsHight +"\",";
            message += "\"D6\":\""+ newEsp.pins.D6.IsHight +"\",";
            message += "\"D7\":\""+ newEsp.pins.D7.IsHight +"\",";
            message += "\"D8\":\""+ newEsp.pins.D8.IsHight +"\",";
            message += "\"D9\":\""+ newEsp.pins.D9.IsHight +"\",";
            //message += "\"D10\":\""+ newEsp.pins.D10.IsHight +"\",";    
            message += "\"A10\":\""+ newEsp.pins.A0.value +"\",";    
            message = message.slice(0, -1);
            message += "}"
            //send message
            MqtHandler.sendMessage(topic,message);   
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
        forceUpdate: false ,  
        firmware:    req.body.firmware,     
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
            Esp.addEsp(newEsp, (err, esp) => {
                if(err){
                    res.json({success: false, msg:err});
                }else {                    
                    //Update user
                    User.getUserById(newEsp.owner[0] , function(err , user){                            
                        user.esp.push(esp._id);
                        User.updateUser(user, function(err){
                            //Update Firmware
                            Firmware.getFirmwareById(newEsp.firmware , function(err , firm){
                                firm.esp.push(esp._id);
                                Firmware.updateFirmware(firm, function(err){ 
                                    res.json({success: true, msg:'The Esp device is now registered under your acount!!!'});                              
                                });
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
        forceUpdate: false,
        firmware: req.body.firmware, 
        _id : req.body._id,  
    });
    //check Secret
    Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
        if(err) console.log(err);
        if(secret && String(secret._id) != String(newEsp._id)){
            res.json({success: false, msg:'This secret is already in use...'});
            return ;
        }else{
            //Check if this is your device to update.
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
                     console.log(oldfirm.esp);
                    for( var i = 0; i < oldfirm.esp.length; i++){ 
                        if ( String(oldfirm.esp[i]) === String(oldesp._id)) {
                            oldfirm.esp.splice(i, 1); 
                            i--;
                        }
                     }        
                     
                     console.log(oldfirm.esp);                 
                    Firmware.updateFirmware(oldfirm, function(err){
                        //Update new Firmware 
                        Firmware.getFirmwareById(newEsp.firmware , function(err , firm){
                            firm.esp.push(newEsp._id);
                            Firmware.updateFirmware(firm, function(err){ 
                                //Update esp    
                                MqtHandler.subscribe(newEsp.secret);  
                                Esp.updateEsp(newEsp, (err, esp) => {
                                    if(err){
                                        res.json({success: false, msg:err});
                                    }else {                    
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
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.message);
    return;
    //res.send('REGISTER');
    let newEsp = new Esp({
        _id :req.body._id,
        name: req.body.name,
        description: req.body.description,
        secret: req.body.secret,
        group: req.body.group,
        pins : { 
            D0: { InUse :req.body.pins.D0.InUse, IsHight: req.body.pins.D0.IsHight},
            D1: { InUse :req.body.pins.D1.InUse, IsHight: req.body.pins.D1.IsHight},
            D2: { InUse :req.body.pins.D2.InUse, IsHight: req.body.pins.D2.IsHight},
            D3: { InUse :req.body.pins.D3.InUse, IsHight: req.body.pins.D3.IsHight},
            D4: { InUse :req.body.pins.D4.InUse, IsHight: req.body.pins.D4.IsHight},
            D5: { InUse :req.body.pins.D5.InUse, IsHight: req.body.pins.D5.IsHight},
            D6: { InUse :req.body.pins.D6.InUse, IsHight: req.body.pins.D6.IsHight},
            D7: { InUse :req.body.pins.D7.InUse, IsHight: req.body.pins.D7.IsHight},
            D8: { InUse :req.body.pins.D8.InUse, IsHight: req.body.pins.D8.IsHight},
            D9: { InUse :req.body.pins.D9.InUse, IsHight: req.body.pins.D9.IsHight},
            D10: { InUse :req.body.pins.D10.InUse, IsHight: req.body.pins.D10.IsHight},
            A0: { InUse :req.body.pins.A0.InUse, value : req.body.pins.A0.value}
        },     
        owner: req.body.owner,
        isOnline: req.body.isOnline,
        viewOrder: req.body.viewOrder,
        eventSheduler: { },//event object
        timer: req.body.timer,
        version: req.body.version,
        forceUpdate: req.body.forceUpdate
    });
    //Find changes
    
    Esp.getEspBySecret(newEsp.secret, (err,esp) =>{
        if(err) {res.json({success: false, msg:err});}
        
        //Create message
        message = "{"
        if(newEsp.pins.D0.IsHight != esp.pins.D0.IsHight) message += "\"D0\":\""+ newEsp.pins.D0.IsHight +"\",";
        if(newEsp.pins.D1.IsHight != esp.pins.D1.IsHight) message += "\"D1\":\""+ newEsp.pins.D1.IsHight +"\",";
        if(newEsp.pins.D2.IsHight != esp.pins.D2.IsHight) message += "\"D2\":\""+ newEsp.pins.D2.IsHight +"\",";
        if(newEsp.pins.D3.IsHight != esp.pins.D3.IsHight) message += "\"D3\":\""+ newEsp.pins.D3.IsHight +"\",";
        if(newEsp.pins.D4.IsHight != esp.pins.D4.IsHight) message += "\"D4\":\""+ newEsp.pins.D4.IsHight +"\",";
        if(newEsp.pins.D5.IsHight != esp.pins.D5.IsHight) message += "\"D5\":\""+ newEsp.pins.D5.IsHight +"\",";
        if(newEsp.pins.D6.IsHight != esp.pins.D6.IsHight) message += "\"D6\":\""+ newEsp.pins.D6.IsHight +"\",";
        if(newEsp.pins.D7.IsHight != esp.pins.D7.IsHight) message += "\"D7\":\""+ newEsp.pins.D7.IsHight +"\",";
        if(newEsp.pins.D8.IsHight != esp.pins.D8.IsHight) message += "\"D8\":\""+ newEsp.pins.D8.IsHight +"\",";
        if(newEsp.pins.D9.IsHight != esp.pins.D9.IsHight) message += "\"D9\":\""+ newEsp.pins.D9.IsHight +"\",";
        if(newEsp.pins.D10.IsHight != esp.pins.D10.IsHight) message += "\"D10\":\""+ newEsp.pins.D10.IsHight +"\",";
        if(newEsp.pins.A0.value != esp.pins.A0.value) message += "\"A10\":\""+ newEsp.pins.A0.value +"\",";        
        message = message.slice(0, -1);
        message += "}"
        //send message
        if(message != "}")MqtHandler.sendMessage(newEsp.secret,message);
        //Update esp        
        Esp.updateEsp(newEsp, (err, esp) => {
            if(err){
                res.json({success: false, msg:err});
            }else {                    
                res.json({success: true, msg:'The Esp device is now updated!!!'});
            }
        }); 
        message = "";
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



