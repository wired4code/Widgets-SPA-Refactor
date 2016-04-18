/**
 * Module dependencies.
 */
var express = require('express');
var http = require ('http');
var parser = require('body-parser');


// Node express server setup.
var server = express();
server.use(parser.json());
server.set('port', 4000);
server.use(express.static(__dirname + '/'));

server.post('/addwidget', function(req, res){
  console.log('WIDGE', req.body)
  var widget = req.body;
  var options = {
    "method": "POST",
    "hostname": "spa.tglrw.com",
    "port": "4000",
    "path": "/widgets",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache"
    }
  };

  var reqPost = http.request(options, function (res) {
    // var chunks = [];

    // res.on("data", function (chunk) {
    //   chunks.push(chunk);
    // });

    // res.on("end", function () {
    //   var body = Buffer.concat(chunks);
      console.log(body.toString());

  })

  reqPost.write(JSON.stringify(widget))
  reqPost.end();

})

// Start Server.
server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});

