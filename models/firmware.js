const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const Schema = mongoose.Schema;
const FirmSchema = Schema({
    name: String,
    description: String,
    version: { main:Number , secondary: Number},
    versionReadable: String,
    isPublic: Boolean,
    link: String,
    esp: [{ type: Schema.Types.ObjectId, ref: 'Esp' }],
    group: String,
    device: String,
    code: String,
    ownerName: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    buttons: [{ messageOn: String,  messageOff: String , icon: String, buttonType: String}],
    Sliders: [{ Name: String, message: String , value : Number }]
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

module.exports.updateFirmware = function(firmware, callback){  
    var query = {'_id':firmware._id};
    
    Firmware.findOneAndUpdate(query, firmware, {upsert:true}, callback);
}



module.exports.getAllFirmwaresDistinctByGroup = function(id, callback){
   
    Firmware.find({
        // $or: [{owner: id}
        //, {isPublic: true}]
    }).distinct('group',callback)
}

module.exports.getFirmOfGroupDistinctByName = function(id,group, callback){
    const query ={ 
       // $and: [{ $or: [{owner: id}, {isPublic: true}]} ,{
            group: group
        //}]
    }
    Firmware.find(query).distinct('name',callback)
}

module.exports.getFirmOfGroupAndNameDistinctByDevice = function(id,group , name , callback){
    const query ={ 
       // $and: [{ $or: [{owner: id}, {isPublic: true}]} ,{
           group: group , name : name
        //}]
        }
    Firmware.find(query).distinct('device',callback)
}

module.exports.getFirmOfGroupAndNameAndDevice = function(id,group , name , device , callback){
    const query ={ $and: [{ $or: [{owner: id}, {isPublic: true}]} , {group: group , name : name ,device : device} ]}
    Firmware.find(query,callback)
}

module.exports.getDevices = function(callback){
    const query ={ 
       // $and: [{ $or: [{owner: id}, {isPublic: true}]} ,{
          // group: group , name : name
        //}]
        }
    Firmware.find(query).distinct('device',callback)
}

module.exports.getFirmwareByUser = function(id, callback){
    const query ={owner: id}
    Firmware.find(query, callback)
}
//group [{name;string , [{device:string, [{  version}]}]       }]