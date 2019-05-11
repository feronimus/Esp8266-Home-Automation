const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config= require('./config/database');

const app = express();
//Connect to Database
mongoose.connect(config.database,{ useNewUrlParser: true });

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to dabase ' + config.database);
})

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
})


const users = require('./routes/users');
const esp = require('./routes/esp');
const firmware = require('./routes/firmware');
//Port Number
const port = 3000;

//Mqtt middleware
const mqttHandler = require('./MqttServer/mqtt_handler');
var mqttClient = new mqttHandler();
mqttClient.connect();

//CORS middleware
app.use(cors());

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/esp', esp);
app.use('/firmware', firmware);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint') 
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
var server = app.listen(port, () => {
    console.log("app running on port.", server.address().port);
})