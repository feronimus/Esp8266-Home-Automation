#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>

#include <ESP8266HTTPClient.h>
#include <WiFiManager.h>
#include <ArduinoJson.h>

const char* ssid = "HBA_3";
const char* password = "7419638525"; 
const char* host = "193.70.88.77";  
const char* path = "/esp/authenticate";
const int Port = 3000;  
//const String MAC=(String)WiFi.macAddress();
//const String ID=(String)ESP.getChipId();
//const String secret ="ESP8266-"+ID+MAC; 
const String secret ="secretESP1"; 
const int waitTime = 0; // miliseconds 
String PostData;
int ledPin0 = D0;
int ledPin1 = D1;
int ledPin2 = D2;
int ledPin3 = D3;
int ledPin4 = D4;
int ledPin5 = D5;
int ledPin6 = D6;
int ledPin7 = D7;
int ledPin8 = D8;
int ledPin9 = D9;
int ledPin10 = D10;
int ledPinA0 = A0;

void setup() {
  Serial.begin(115200);
  delay(10);
  
  // prepare GPIOs
  pinMode(ledPin0, OUTPUT);
  digitalWrite(ledPin0, LOW); 
  
  pinMode(ledPin1, OUTPUT);
  digitalWrite(ledPin1, LOW);
  
  pinMode(ledPin2, OUTPUT);
  digitalWrite(ledPin2, LOW);
  
  pinMode(ledPin3, OUTPUT);
  digitalWrite(ledPin3, LOW);
  
  pinMode(ledPin4, OUTPUT);
  digitalWrite(ledPin4, LOW);
  
  pinMode(ledPin5, OUTPUT);
  digitalWrite(ledPin5, LOW);
  
  pinMode(ledPin6, OUTPUT);
  digitalWrite(ledPin6, LOW);
  
  pinMode(ledPin7, OUTPUT);
  digitalWrite(ledPin7, LOW);
  
  pinMode(ledPin8, OUTPUT);
  digitalWrite(ledPin8, LOW);
  
  pinMode(ledPin9, OUTPUT);
  digitalWrite(ledPin9, LOW);
  
  pinMode(ledPin10, OUTPUT);
  digitalWrite(ledPin10, LOW);
  
  pinMode(ledPinA0, OUTPUT);
  digitalWrite(ledPinA0, LOW);  
    
  WiFiManager wifiManager;
  //set custom ip and password for portal
  wifiManager.setAPStaticIPConfig(IPAddress(10,10,10,10), IPAddress(10,10,10,10), IPAddress(255,255,255,0));  
  wifiManager.autoConnect("ESP8266 prototype 0.1", "7419638525");

  //Create PostDataBody String
  PostData = "{\"secret\":\"";
  PostData += secret;
  PostData += "\"}";

  OTASetup();
}

void OTASetup(){

  //ArduinoOTA.setPort(8267);
  ArduinoOTA.setPassword("admin");
  ArduinoOTA.onStart([]() {
    Serial.println("Start");
  });
  ArduinoOTA.onEnd([]() {
    Serial.println("\nEnd");
  });
  ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
    Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
  });
  ArduinoOTA.onError([](ota_error_t error) {
    Serial.printf("Error[%u]: ", error);
    if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");
    else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");
    else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");
    else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");
    else if (error == OTA_END_ERROR) Serial.println("End Failed");
  });
  ArduinoOTA.begin();
  Serial.println("Ready");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  }


  
void loop() { 
  ArduinoOTA.handle();
  PayloadManage(HttpCall());  
  //Delay for handling
  delay(waitTime);
}

 //Make http call
String HttpCall(){ 
  HTTPClient http;
  http.begin(host,Port,path);
  http.addHeader("Content-Type", "application/json");  
  int httpCode = http.POST(PostData);
  String payload = http.getString();
  http.end();  
  //Serial.println(payload);
  return payload;
}

//handle payload    
void PayloadManage(String p){
  
  StaticJsonDocument<300> doc;    
  deserializeJson(doc, p);
  
  if(doc["D0"] == true) digitalWrite(ledPin0, HIGH);
  if(doc["D0"] == false) digitalWrite(ledPin0, LOW); 

   if(doc["D1"] == true) digitalWrite(ledPin1, HIGH);
  if(doc["D1"] == false) digitalWrite(ledPin1, LOW);  

  if(doc["D2"] == true) digitalWrite(ledPin2, HIGH);
  if(doc["D2"] == false) digitalWrite(ledPin2, LOW);  

  if(doc["D3"] == true) digitalWrite(ledPin3, HIGH);
  if(doc["D3"] == false) digitalWrite(ledPin3, LOW);  

  if(doc["D4"] == true) digitalWrite(ledPin4, HIGH);
  if(doc["D4"] == false) digitalWrite(ledPin4, LOW);  

  if(doc["D5"] == true) digitalWrite(ledPin5, HIGH);
  if(doc["D5"] == false) digitalWrite(ledPin5, LOW);  

  if(doc["D6"] == true) digitalWrite(ledPin6, HIGH);
  if(doc["D6"] == false) digitalWrite(ledPin6, LOW);  

  if(doc["D7"] == true) digitalWrite(ledPin7, HIGH);
  if(doc["D7"] == false) digitalWrite(ledPin7, LOW);  

  if(doc["D8"] == true) digitalWrite(ledPin8, HIGH);
  if(doc["D8"] == false) digitalWrite(ledPin8, LOW);  

  if(doc["D9"] == true) digitalWrite(ledPin9, HIGH);
  if(doc["D9"] == false) digitalWrite(ledPin9, LOW);
  
  if(doc["A0"] == true) digitalWrite(ledPinA0, HIGH);
  if(doc["A0"] == false) digitalWrite(ledPinA0, LOW);  
}
