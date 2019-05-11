const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const User =  require('../models/user');

const Schema = mongoose.Schema;
const EspSchema = Schema({
    name: String,
    secret: String,
    description: String,
    group: String,
    pins : {
        D0: {InUse:Boolean , IsHight : Boolean},     
        D1: {InUse:Boolean, IsHight : Boolean},    
        D2: {InUse:Boolean, IsHight : Boolean},    
        D3: {InUse:Boolean, IsHight : Boolean},    
        D4: {InUse:Boolean, IsHight : Boolean},    
        D5: {InUse:Boolean, IsHight : Boolean},    
        D6: {InUse:Boolean, IsHight : Boolean},    
        D7: {InUse:Boolean, IsHight : Boolean},    
        D8: {InUse:Boolean, IsHight : Boolean},    
        D9: {InUse:Boolean, IsHight : Boolean},    
        D10: {InUse:Boolean, IsHight : Boolean},    
        A0: {InUse:Boolean, value : Number}
    },
    owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    firmware: { type: Schema.Types.ObjectId, ref: 'Firmware' },
    isOnline: Number,
    viewOrder: Number,
    eventSheduler: { },//event object
    timer: Number,
    version: String,
    forceUpdate : Boolean
  });

  mongoose.set('useFindAndModify', false);


const Esp = module.exports = mongoose.model('Esp' , EspSchema);


module.exports.getEspById = function(id, callback){
    Esp.findById(id, callback)
}

module.exports.getEspByName = function(nameValue, callback){
    const query = {name: nameValue}
    Esp.findOne(query, callback)
}

module.exports.getEspBySecret = function(secretValue, callback){
    const query = {secret: secretValue}
    Esp.findOne(query, callback)
}

module.exports.getAllEsp = function(callback){
    Esp.find({},callback)
}



module.exports.addEsp =function(newEsp, callback){
    newEsp.save(callback);
    
}
module.exports.updateEsp = function(esp, callback){  
    var query = {'_id':esp._id};
    Esp.findOneAndUpdate(query,esp, {upsert:true}, callback);
}

module.exports.compareSecret  = function(candidateSecret, hash , callback){
    bcrypt.compare(candidateSecret, hash , (err, isMatch) =>{
        if(err) throw err;
        callback(null ,isMatch);
    })
}