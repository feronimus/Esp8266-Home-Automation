const mqtt = require('mqtt');
const express = require('express');
const router =  express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User =  require('../models/user');
const Esp =  require('../models/esp');
const multer = require('multer');

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
        messageFunction(topic);
        console.log("From : " +topic.substr(4) + "  - message : " + message );
      });
    function messageFunction(topic){
        //topic esp/secret 
        secret = topic.substr(4);

        Esp.getEspBySecret(secret, (err, esp) =>{
            if(err) throw err;
            if(!esp){
                return;
            }  
            var d = new Date();
            var t= d.getTime()/ 1000 ;
            esp.isOnline = t ;// how many seconds have passed since 1970/01/01
            Esp.updateEsp(esp, (err, esp) => {});            
        })
        //prob reset all var ?????
    };

    mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);      
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
  
  }

  // Sends a mqtt message to topic
  sendMessage(topic,message) {
    mqttClient.publish(topic, message);
  }
  
}


// mqtt subscriptions
router.post('/subscribe', passport.authenticate('jwt' , {session:false}), (req, res, next) => {    
    mqttClient.subscribe(req.body.subscription, {qos: qosVal});

 });  
// mqtt unsubscriptions
router.post('/unsubscribe', passport.authenticate('jwt' , {session:false}), (req, res, next) => {

    mqttClient.unsubscribe(req.body.unsubscription);

 });     

 
module.exports = MqttHandler;