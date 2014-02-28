var express = require("express");
var logfmt = require("logfmt");
var restler = require('restler');
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  restler.get('https://jeydeveloper.cloudant.com:443/_all_dbs', {
	username: 'jeydeveloper',
	password: 'okey19aja',
  }).on('complete', function (data) {
        res.send(data);
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});