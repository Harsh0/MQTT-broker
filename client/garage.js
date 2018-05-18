const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:9832')

/**
* The state of the garage, defaults to closed
* Possible states : closed, opening, open, closing
*/

var state = 'closed'

client.on('connect', () => {
  // Inform controllers that garage is connected
  console.log("yet to publish")
  client.publish('garage/connected', 'true')
  console.log("published")
})