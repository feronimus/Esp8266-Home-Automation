const express = require('express');
const router =  express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User =  require('../models/user');
const Esp =  require('../models/esp');
const multer = require('multer');


module.exports = router;
// Register
router.post('/register', passport.authenticate('jwt' , {session:false}), (req, res, next) => {   
    
    //res.send('REGISTER');
    let newEsp = new Esp({
        name: req.body.name,
        description: req.body.description,
        secret: req.body.secret,
        group: req.body.group,
        pins : {
            D0: { InUse :req.body.pins.D0, IsHight: false},
            D1: { InUse :req.body.pins.D1, IsHight: false},
            D2: { InUse :req.body.pins.D2, IsHight: false},
            D3: { InUse :req.body.pins.D3, IsHight: false},
            D4: { InUse :req.body.pins.D4, IsHight: false},
            D5: { InUse :req.body.pins.D5, IsHight: false},
            D6: { InUse :req.body.pins.D6, IsHight: false},
            D7: { InUse :req.body.pins.D7, IsHight: false},
            D8: { InUse :req.body.pins.D8, IsHight: false},
            D9: { InUse :req.body.pins.D9, IsHight: false},
            D10: { InUse :req.body.pins.D10, IsHight: false},
            A0: { InUse :req.body.pins.A0, value : 0}
        },
        owner: req.body.owner,
        isOnline: 0,
        viewOrder: -1,
        eventSheduler: { },//event object
        timer: -1,
        version: 0.1,
        softwareURL: ""
    });
    //console.log(newEsp);
    if(!req.body._id){
        //check Secret
        Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
            if(err) console.log(err);
            if(secret){
                res.json({success: false, msg:'This secret is already in use...'});
                return ;
            }else{
                //register esp                
                console.log("registering esp");
                Esp.addEsp(newEsp, (err, esp) => {
                    if(err){
                        res.json({success: false, msg:err});
                    }else {                    
                        //this.UpdateUserWithEsp(User.getUserById(newEsp.owner[0]),esp._id);
                        User.getUserById(newEsp.owner[0] , function(err , user){                            
                            user.esp.push(esp._id);
                            User.updateUser(user, function(err){
                            res.json({success: true, msg:'The Esp device is now registered under your acount!!!'});
                            });
                        });
                    }
                }); 
            }
        });
    }else{
        newEsp._id = req.body._id;
        //check Secret
        Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
            if(err) console.log(err);
            if(secret && String(secret._id) != String(newEsp._id)){
                res.json({success: false, msg:'This secret is already in use...'});
                return ;
            }else{
                //Update esp        
                Esp.updateEsp(newEsp, (err, esp) => {
                    if(err){
                        res.json({success: false, msg:err});
                    }else {                    
                        res.json({success: true, msg:'The Esp device is now updated!!!'});
                    }
                }); 
            }
        });           
    }
});

// Update
router.post('/update', passport.authenticate('jwt' , {session:false}), (req, res, next) => {   
    
    //res.send('REGISTER');
    let newEsp = new Esp({
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
        softwareURL: req.body.softwareURL
    });
    if(!req.body._id){
        //check Secret
        Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
            if(err) console.log(err);
            if(secret){
                res.json({success: false, msg:'This secret is already in use...'});
                return ;
            }else{
                //register esp                
                console.log("registering esp");
                Esp.addEsp(newEsp, (err, esp) => {
                    if(err){
                        res.json({success: false, msg:err});
                    }else {                    
                        //this.UpdateUserWithEsp(User.getUserById(newEsp.owner[0]),esp._id);
                        User.getUserById(newEsp.owner[0] , function(err , user){                            
                            user.esp.push(esp._id);
                            User.updateUser(user, function(err){
                            res.json({success: true, msg:'The Esp device is now registered under your acount!!!'});
                            });
                        });
                    }
                }); 
            }
        });
    }else{
        newEsp._id = req.body._id;
        //check Secret
        Esp.getEspBySecret(newEsp.secret, function(err, secret){ 
            if(err) console.log(err);
            if(secret && String(secret._id) != String(newEsp._id)){
                res.json({success: false, msg:'This secret is already in use...'});
                return ;
            }else{
                //Update esp        
                Esp.updateEsp(newEsp, (err, esp) => {
                    if(err){
                        res.json({success: false, msg:err});
                    }else {                    
                        res.json({success: true, msg:'The Esp device is now updated!!!'});
                    }
                }); 
            }
        });           
    }
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


//----------- Upload-downalod files .bin codes -----------\\

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './../uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});

var upload = multer({storage:store}).single('file');

router.post('/espuploads',  (req, res, next) =>{
    console.log('got inside esp uploads');
    upload(req,res,(err)=>{
        if(err) return res.status(501).json({error:err});
        res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
});



