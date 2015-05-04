var mqtt = require('mqtt');
var url  = 'mqtt://localhost:1883';

var client = mqtt.connect(url, { clientId: 'mqtt-sub-', clean: false });

client.on('connect', function () {
  client.subscribe('airasoul', { qos: 1 });
});

client.on('message', function (topic, message) {
  console.log('received message ',  message.toString());
});