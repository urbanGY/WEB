var express = require('express');
var http = require('http');
var fs = require('fs')

var app = express();
app.set('port', process.env.PORT || 8081);

var router = express.Router();
router.route('/').get(function(req, res) {
  res.sendfile(__dirname + '/main.html');
});
router.route('/page1').get(function(req, res) {
  res.sendfile(__dirname + '/page1.html');
});
router.route('/page3').get(function(req, res) {
  res.sendfile(__dirname + '/page1.html');
});
router.route('/page2').get(function(req, res) {
  res.sendfile(__dirname + '/page1.html');
});

app.use('/',router);

var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('initiate express server!');
});
