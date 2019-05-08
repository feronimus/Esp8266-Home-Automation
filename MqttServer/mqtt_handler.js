const mqtt = require('mqtt');
const express = require('express');
const router =  express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User =  require('../models/user');
const Esp =  require('../models/esp');
const multer = require('multer');



class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://localhost';
    //this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    //this.password = 'YOUR_PASSWORD';
  }
  
  connect() {
    
    this.mqttClient = mqtt.connect(this.host);


    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    }); 

    //subscribe to all existing esps
    console.log("i run bastard");


    // When a message arrives, console.log it
    this.mqttClient.on('message', function(topic, message, packet) {
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

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic
  sendMessage(topic,message) {
    this.mqttClient.publish(topic, message);
  }
  
}


// mqtt subscriptions
router.post('/subscribe', passport.authenticate('jwt' , {session:false}), (req, res, next) => {    
    this.mqttClient.subscribe(req.body.subscription, {qos: 1});

 });  
// mqtt unsubscriptions
router.post('/unsubscribe', passport.authenticate('jwt' , {session:false}), (req, res, next) => {

    this.mqttClient.unsubscribe(req.body.unsubscription);

 });     

 
module.exports = MqttHandler;