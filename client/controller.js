const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:9832')

var garageState = ''
var connected = false

client.on('connect', () => {
  client.subscribe('garage/connected')
  console.log("subscribed")
})

client.on('message', (topic, message) => {
  console.log(topic,message);
  if(topic === 'garage/connected') {
    connected = (message.toString() === 'true');
    console.log(connected?'connected':'not connected')
  }
})