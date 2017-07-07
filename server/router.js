var path = require('path');

module.exports=function(app) {
	app.get('/lostandfound', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});
	
	app.get('/donate', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});
}