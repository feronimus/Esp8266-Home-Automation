//Handle all shedules
//Resedule on server startUP
//Remove old ones
// Handle repeats
const Esp =  require('../models/esp');
const User =  require('../models/user');
const MqtHandler = require('../MqttServer/mqtt_handler');

const Tasks = [];
//Define first all const module.exports
var schedule = require('node-schedule');


       


const cancelTask   = function(taskid,callback){
    if(Tasks.count <= 0) return;
    Tasks.forEach(function(t) {
        if(t.taskID == taskid) {
            t.task.cancel();            
        }
    });
}
module.exports.cancelTask = cancelTask;

const removeTask = function(taskID,espID,callback){
    
    Esp.getEspById(espID, (err,esp) =>{ 
        if(err) return;
        for( var i = 0; i < esp.eventSheduler.length; i++){ 
            if ( String(esp.eventSheduler[i]._id) === String(taskID)) {                
                console.log(esp.eventSheduler.length)  
                esp.eventSheduler.splice(i, 1);    
                console.log(esp.eventSheduler.length)           
                i--;
            }
        }
        Esp.updateEsp(esp, (err, esp) => { });    
        
    });
}
module.exports.removeTask = removeTask;

const sheduleTask = function(esp,task,callback){    
    if(!task.repeat){
        let newTask  = schedule.scheduleJob(task.date, function() {
        //let newTask  = schedule.scheduleJob(new Date().getTime()+1000, function() {   
            taskCalling(esp,task)
        });
        let tasker = {
            task: newTask,
            espID: esp._id,
            taskID: task._id
        };
        Tasks.push(tasker);    
    }else{
        var rule = new schedule.RecurrenceRule();
        rule.month = task.month;
        rule.dayOfWeek =  task.dayOfWeek;
        rule.hour =  task.hour;
        rule.minute =  task.minute;
        
        let newTask  = schedule.scheduleJob(rule, function() {   
            taskCalling(esp,task)
        });
        let tasker = {
            task: newTask,
            espID: esp._id,
            taskID: task._id
        };
        Tasks.push(tasker); 
        //console.log(Tasks) ;
    }
    //cancelTask(Tasks[0].taskID);
    //removeTask(Tasks[0].taskID,Tasks[0].espID);

}
module.exports.sheduleTask = sheduleTask;

// Normal module.exports.name
module.exports.startServer = function(callback){
    Esp.getAllEsp( (err,DeviceList) =>{ 
        if(err) throw err;           
        if(DeviceList){
            DeviceList.forEach(function(esp) {                                
                if(esp.eventSheduler){
                    esp.eventSheduler.forEach(function(task) {
                        console.log(task) 
                        sheduleTask(esp,task);
                    });
                }
            });
        }  
    });
}

const taskCalling = function(oldesp,task){
    Esp.getEspById(oldesp._id, (err,esp) =>{ 
        esp.buttons.forEach(button => {
            if(task.buttonID == button.id) button.message = task.message;
        });
        Esp.updateEsp(esp, (err, esp) => { 
            if(err){
                console.log(err);
                return;
            }else {  
                MqtHandler.sendMessage( esp.secret,"{ msg: \""+task.message + "\"}");
                if(!task.repeat){
                    removeTask(task._id,esp._id);
                }      
            }
        }); 
    });

}