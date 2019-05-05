const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const Schema = mongoose.Schema;
const UserSchema = Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    esp: [{ type: Schema.Types.ObjectId, ref: 'Esp' }]
  });

const User = module.exports = mongoose.model('User' , UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback)
}

module.exports.getEspsOfUser= function(userID, callback){
    const query = {_id: userID}
    User.find(query).populate('esp').exec(callback);
}

module.exports.getUserByUsername = function(usernameValue, callback){
    const query = {username: usernameValue}
    User.findOne(query, callback)
}


module.exports.getUserByMail = function(email, callback){
    const query = {email: email}
    User.findOne(query, callback)
}

module.exports.addUser =function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
module.exports.updateUser = function(user, callback){  
    var query = {'_id':user._id};
    User.findOneAndUpdate(query, user, {upsert:true}, callback);
}

module.exports.comparePassword  = function(candidatePassword, hash , callback){
    bcrypt.compare(candidatePassword, hash , (err, isMatch) =>{
        if(err) throw err;
        callback(null ,isMatch);
    })
}