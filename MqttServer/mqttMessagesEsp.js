const MqtHandler = require('./mqtt_handler');
const Esp =  require('../models/esp');

module.exports.HandleMqttMessage = function(topic, Message, packet){

    let secret = topic.substr(4);
    if(!Message) return;
    //Send all info as esp startup
    if(Message == "START"){ 
        Esp.getEspBySecret(secret, (err,newEsp) =>{
            if(err) {res.json({success: false, msg:err});}
            if(!newEsp)return;
            //Create message
            let message = "{"
            message += "\"D0\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D1\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D2\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D3\":\""+ newEsp.pins.D0.IsHight +"\",";
            //message += "\"D4\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D5\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D6\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D7\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D8\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"D9\":\""+ newEsp.pins.D0.IsHight +"\",";
            message += "\"A10\":\""+ newEsp.pins.A0.value +"\",";
            //message += "\"D10\":\""+ newEsp.pins.D0.IsHight +"\",";        
            message = message.slice(0, -1);
            message += "}"
            //send message
            console.log("topic :"+ topic+ "mes : " + message);
            MqtHandler.sendMessage(topic,message);   
        });
    }


}