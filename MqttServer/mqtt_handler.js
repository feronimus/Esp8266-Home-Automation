const mqtt = require('mqtt');
const express = require('express');
const Esp =  require('../models/esp');
const EspRouts =  require('../routes/esp');

const qosVal = 1; 
var mqttClient;
class MqttHandler {
  constructor() {
    //mqttClient = null;
    this.host = 'mqtt://localhost';
    //this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    //this.password = 'YOUR_PASSWORD';
  }
  
  connect() {
    
    mqttClient = mqtt.connect(this.host);


    // Mqtt error calback
    mqttClient.on('error', (err) => {
      console.log(err);
      mqttClient.end();
    });

    // Connection callback
    mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
        //subscribe to all existing esps
        Esp.getAllEsp((err, esplist) =>{
            if(err) throw err;
            if(esplist){
                esplist.forEach(function(esp) {   
                    mqttClient.subscribe("esp/" + esp.secret + "/iot", {qos: qosVal});
                });
            }        
        })
    }); 

    //subscribe to all existing esps
    


    // When a message arrives, console.log it
    mqttClient.on('message', function(topic, message, packet) {
      messageAuth(topic, message, packet);      
      

    });

    function messageAuth(topic, message, packet){
        //topic esp/secret 
       
        var secret = topic.substring(topic.indexOf("/") + 1);
         secret = secret.substring(0, secret.indexOf('/'));

        Esp.getEspBySecret(secret, (err, esp) =>{
            if(err) throw err;
            if(!esp){
                return;
            }  
            var d = new Date();
            var t= d.getTime()/ 1000 ;
            var day = d.getDay();
            var month = d.getHours();
            var year = d.getMinutes();
            console.log( day +"/"+  month +"/"+ year + " - GOT From : " +topic + "  - message : " + message );
            esp.isOnline = t ;// how many seconds have passed since 1970/01/01
            Esp.updateEsp(esp, (err, esp) => {});
            if(message != "online")  EspRouts.HandleMqttMessage(secret, message, packet);
           
        })
        //prob reset all var ?????
    };

    mqttClient.on('close', () => {
      //console.log(`mqtt client disconnected`);        
     
    });
  
  }

  // Sends a mqtt message to topic
  
 
  

  
};


module.exports = MqttHandler;

module.exports.subscribe = function(subscription){
  mqttClient.subscribe("esp/" + subscription +  "/iot", {qos: qosVal});
};

module.exports.unsubscribe = function(subscription){
  mqttClient.unsubscribe("esp/" + subscription +  "/iot", {qos: qosVal});
};
 


module.exports.sendMessage = function(topic,message) {
  console.log("To SEND : " + "esp/" +topic + "/server"+ "  - message : " + message );
  mqttClient.publish("esp/" +topic + "/server", message );
}