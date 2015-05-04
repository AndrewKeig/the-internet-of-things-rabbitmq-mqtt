var amqp = require('amqp');
var url  = 'amqp://localhost:5672'

var payload = {
  deviceId : '8675309'
};

var connection = amqp.createConnection({url: url},  { defaultExchangeName: 'amq.topic' });

connection.on('ready', function () {
  connection.publish('airasoul', payload);

  setTimeout(function(){
    connection.disconnect();
    process.exit();
  }, 500);
});
