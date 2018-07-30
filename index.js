var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs')
var bodyParser = require('body-parser');
var url = require('url');

var options = {
  Key: fs.readFileSync('./Key.pem'),
  cert: fs.readFileSync('./cert.pem')
};
var app = express();
app.set('port', process.env.PORT || 8081);
//app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

var router = express.Router();
router.route('/').get(function(req, res) {
  res.sendfile(__dirname + '/main.html');
});
router.route('/page1').get(function(req, res) {
  res.sendfile(__dirname + '/page1.html');
});
router.route('/page2').get(function(req, res) {
  res.sendfile(__dirname + '/page2.html');
});
router.route('/page3').get(function(req, res) {
  res.json({ text : 'sample text'});
});
router.route('/text').post(function(req, res) {
  var text = req.body.text;
  console.log("text : "+text);
  var sendText = {
    returnText : "send "+text
  }
  console.log("sned text : "+sendText.returnText);
  res.json(sendText);
});

app.use('/',router);

var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('initiate express server!');
});
