var express = require ('express');
var app = express();
var router = require('./router')
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));
router(app)

app.listen(port);