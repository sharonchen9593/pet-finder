var path = require('path');
var LostAndFound = require('./models/lostandfound');

module.exports=function(app) {
	app.get('/lostandfound', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

	app.get('/donate', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

  app.get('/newentry', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.post('/lostandfound', function(req, res) {
    var newLostAndFound = LostAndFound({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      lostOrFound: req.body.lostOrFound,
      imageStr: req.body.imageStr,
      petName: req.body.petName,
      dateLostOrFound: req.body.dateLostOrFound,
      animal: req.body.animal,
      breed: req.body.breed,
      description: req.body.description
    });
    newLostAndFound.save(function(err) {
      if (err) throw err;
      res.send('Success')
    })
  });


}