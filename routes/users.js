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
    console.log(req.body);
    if(req.body.password != req.body.confirmPassword) {
        res.status(400).json({data: {errors : "Passwords don't match!"}});
        return;
    }

    let newUser = new User({
        name: req.body.fullName,
        email: req.body.email,
        //username: req.body.username,
        password: req.body.password,
        
    });  
    //check mail
    User.getUserByMail(newUser.email, function(err, user){ //must check if email exists
        if(err) console.log(err);
        if(user){        
            res.status(400).json({data: {errors : "A User with this email already exists."}});
            return;
        }else{
            //register user
            User.addUser(newUser, (err, user) => {
                if(err){
                    res.status(400).json({data: {errors : err}});
             }else {
                res.json({ data :{messages : 'User registerd successfully'}, });
            }
            });
         }       
    });
       
});

/*
// Authenticate New login
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
*/

//Not used
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
router.post('/login',(req, res, next) => {  
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByMail(email, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.status(400).json({data: {errors : 'Email or Password is not correct, please try again.'}});
        }
        
        User.comparePassword(password, user.password , (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                data = {
                    user: {
                        id: user._id,
                        name: user.name,
                        //username: user.username,
                        email: user.email
                    }
                };
                //enable this after jwt refresh is fixed
                //expireTime = 600; // 10 minutes 
                expireTime = 604800 // 1 week
                if(req.body.rememberMe) expireTime = 604800 // 1 week
                const token = jwt.sign(data, config.secret, {
                    expiresIn: expireTime 
                });

                res.json({
                    success: true,
                    token: token,  
                    data :{messages : 'Logged In.'},                  
                })
            }else {
                return res.status(400).json({data: {errors : 'Email or Password is not correct, please try again.'}});
            }
        });
    })
});

router.delete('/logout',(req, res, next) => {  
    res.json({
        success: true, 
        data :{messages : 'Logged Out.'},                  
    })
    return;
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByMail(email, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.status(400).json({data: {errors : 'Email or Password is not correct, please try again.'}});
        }
        
        User.comparePassword(password, user.password , (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                data = {
                    user: {
                        id: user._id,
                        name: user.name,
                        //username: user.username,
                        email: user.email
                    }
                };
                //enable this after jwt refresh is fixed
                //expireTime = 600; // 10 minutes 
                expireTime = 604800 // 1 week
                if(req.body.rememberMe) expireTime = 604800 // 1 week
                const token = jwt.sign(data, config.secret, {
                    expiresIn: expireTime 
                });

                res.json({
                    success: true,
                    token: token,  
                    data :{messages : 'Logged In.'},                  
                })
            }else {
                return res.status(400).json({data: {errors : 'Email or Password is not correct, please try again.'}});
            }
        });
    })
});

