const mqtt = require('mqtt');
const express = require('express');
const Esp =  require('../models/esp');
const mqtMessages = require('./mqttMessagesEsp');

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
                    console.log(esp.secret);
                    mqttClient.subscribe("esp/"+esp.secret, {qos: qosVal});
                });
            }        
        })
    }); 

    //subscribe to all existing esps
    


    // When a message arrives, console.log it
    mqttClient.on('message', function(topic, message, packet) {
      messageAuth(topic);      
      console.log("From GOT: " +topic.substr(4) + "  - message : " + message );

    });

    function messageAuth(topic){
        //topic esp/secret 
        let secret = topic.substr(4);

        Esp.getEspBySecret(secret, (err, esp) =>{
            if(err) throw err;
            if(!esp){
                return;
            }  
            var d = new Date();
            var t= d.getTime()/ 1000 ;
            esp.isOnline = t ;// how many seconds have passed since 1970/01/01
            Esp.updateEsp(esp, (err, esp) => {}); 
            mqtMessages.HandleMqttMessage(topic, message, packet);
           
        })
        //prob reset all var ?????
    };

    mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);  
      
      mqtMessages.HandleMqttMessage("esp/asdfdsasadf", "START", "");
    });
  
  }

  // Sends a mqtt message to topic
  
  sendMessage(topic,message) {
    console.log("To SEND : " +topic.substr(4) + "  - message : " + message );
    mqttClient.publish(topic, message);
  }
  

  
};


module.exports = MqttHandler;

module.exports.subscribe = function(subscription){
  mqttClient.subscribe(subscription, {qos: qosVal});
};

module.exports.unsubscribe = function(subscription){
  mqttClient.unsubscribe(subscription, {qos: qosVal});
};
 


module.exports.sendMessage = function(topic,message) {
  console.log("To SEND : " +topic.substr(4) + "  - message : " + message );
  mqttClient.publish(topic, message);
}