var express = require('express');

var server = express();

server.set('port', 3000);

server.use(express.static(__dirname + '/'));

server.listen(server.get('port'), function(){
  console.log('Listening to server on port ' + server.get('port'));
});