var express = require ('express');
var app = express();
var router = require('./router')
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var mongoURL = "mongodb://localhost:auth/entries"

mongoose.connect(mongoURL);

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json({type: '*/*'}));
router(app)

app.listen(port, function() {
  console.log('Running on localhost:' + port)
});
