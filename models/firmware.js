const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const Schema = mongoose.Schema;
const FirmSchema = Schema({
    name: String,
    description: String,
    version: { main:Number , secondary: Number},
    isPublic: Boolean,
    link: String,
    esp: [{ type: Schema.Types.ObjectId, ref: 'Esp' }],
    group: String,
    device: String,    
    owner: { type: Schema.Types.ObjectId, ref: 'User' }

  });

  
  mongoose.set('useFindAndModify', false);
  
const Firmware = module.exports = mongoose.model('Firmware' , FirmSchema);


module.exports.getFirmwareById = function(id, callback){
    Firmware.findById(id, callback)
}

module.exports.getEspsOfFirmware= function(FirmwareID, callback){
    const query = {_id: FirmwareID}
    Firmware.find(query).populate('esp').exec(callback);
}

module.exports.getFirmwaresByName = function(FirmwareName, callback){
    const query = {name: FirmwareName}
    Firmware.find(query, callback)
}



module.exports.addFirmware =function(newFirmware, callback){   
    newFirmware.save(callback);      
}

module.exports.updateFirmware = function(Firmware, callback){  
    var query = {'_id':Firmware._id};
    Firmware.findOneAndUpdate(query, Firmware, {upsert:true}, callback);
}



module.exports.getAllFirmwaresDistinctByGroup = function( callback){
    Firmware.find({}).distinct('group',callback)
}

module.exports.getFirmOfGroupDistinctByName = function(group, callback){
    const query = {group: group}
    Firmware.find(query).distinct('name',callback)
}

module.exports.getFirmOfGroupAndNameDistinctByDevice = function(group , name , callback){
    const query = {group: group , name : name}
    Firmware.find(query).distinct('device',callback)
}

module.exports.getFirmOfGroupAndNameAndDevice = function(group , name , device , callback){
    const query = {group: group , name : name ,device : device}
    Firmware.find(query,callback)
}

//group [{name;string , [{device:string, [{  version}]}]       }]