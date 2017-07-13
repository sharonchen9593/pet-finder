var express = require ('express')
var app = express();
var router = require('./router')
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');


var mongoURL = "mongodb://user:user@ds034807.mlab.com:34807/petfinder" || "mongodb://localhost:auth/entries"

mongoose.connect(mongoURL, {useMongoClient:true});

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json({type: '*/*', limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app)

//auth stuff, will move over to another module when finished


app.listen(port, function() {
  console.log('Running on localhost:' + port)
});

