var express = require ('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));

app.listen(port);