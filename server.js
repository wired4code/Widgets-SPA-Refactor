var express = require('express');
var http = require ('http');
var parser = require('body-parser');

// to resolve CORS issues making external API calls from client
var allowCrossDomain = function(req, res, next) {
    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
    else {
      next();
    }
};

var port = process.env.PORT || 3000;

var server = express();
server.use(parser.json());
server.use(allowCrossDomain);
server.set('port', port);
server.use(express.static(__dirname + '/'));


server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});

