const express = require('express');
const router =  express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User =  require('../models/user');

module.exports = router;
// Register
router.post('/register', (req, res, next) => {
    //res.send('REGISTER');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    //check username
    User.getUserByUsername(newUser.username, function(err, user){ //must check if user exists
        if(err) console.log(err);
        if(user){
          res.json({success: false, msg:'This username already exists'});
          return ;
        }else{
            //check mail
            User.getUserByMail(newUser.email, function(err, user){ //must check if user exists
                if(err) console.log(err);
                if(user){
                  res.json({success: false, msg:'This email is already in use.'});
                  return ;
                }else{
                    //register user
                    User.addUser(newUser, (err, user) => {
                        if(err){
                          res.json({success: false, msg:err});
                     }else {
                           res.json({success: true, msg:'You are now registered and can log in.'});
                    }
                    });
                 }       
            });
        }
     })
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        
        User.comparePassword(password, user.password , (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            }else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    })
});

// Profile
router.get('/profile', passport.authenticate('jwt' , {session:false}), (req, res, next) => {
    //res.send('PROFILE');
    res.json({user: req.user});
});

//User Update
router.post('/update', (req, res, next) => {  
    console.log('done');
    console.log(req.body);
    //Log it 
    res.json({success: true, msg:"Got it"});
return;

    User.getUserByUsername(req.user.username, (err, oldUser) =>{        
        if(err) console.log(err);       
        if(oldUser) {            
            let newObj = {};
            Object.keys(oldUser.toJSON()).forEach(function(prop) {
                newObj[prop] = req.body[prop];
            });
            Object.keys(newObj).forEach(function(prop) {
                if(newObj[prop]) oldUser[prop] = newObj[prop];
            });
            //register user
            User.updateUser(oldUser,req.user.username, (err, user) => {
                if(err){
                    res.json({success: false, msg:err});
                }else {
                    res.json({success: true, msg:'You are now updated'});
                }
            });
        }else  res.json({success: false, msg:"Something went wrong"});
    });



});

