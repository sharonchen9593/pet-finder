var path = require('path');
var LostAndFound = require('./models/lostandfound');
var petfinder = require('pet-finder-api')('e8bc141aa160a7c51a8460be64c1a929','12da585d090d6a12d72dac3dee07eb51');
var Fundraiser = require('./models/donations');


module.exports=function(app) {

  app.get('/search', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/signup', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

	app.get('/lostandfound', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

	app.get('/donate', function(req, res){
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});

  app.get('/newentry', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/random', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/shelters', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/newfund', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/getallentries', (req, res) => {
    LostAndFound.find({}, function(err, entries) {
    var entriesMap = [];

    entries.forEach(function(entry) {
      entriesMap.push(entry)
    });

    res.send(entriesMap);
  });
  });

  app.get('/getallfundraiserentries', (req, res) => {
    Fundraiser.find({}, function(err, entries) {
    var entriesMap = [];

    entries.forEach(function(entry) {
      entriesMap.push(entry)
    });

    res.send(entriesMap);
  });
  });

  app.post('/submitnewentry', (req, res) => {
    var newLostAndFound = LostAndFound({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      lostOrFound: req.body.lostOrFound,
      imageStr: req.body.imageStr,
      location: req.body.location,
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

  app.post('/submitnewfundraiser', (req, res) => {
    var newFundraiser = Fundraiser({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      suppliesOrFunds: req.body.suppliesOrFunds,
      title: req.body.title,
      description: req.body.description,
      imageStr: req.body.imageStr,
      location: req.body.location,
      venmo: req.body.venmo,
      paypal: req.body.paypal,
      goal: req.body.goal
    });
    newFundraiser.save(function(err) {
      if (err) throw err;
      res.send('Success')
    })
  });

  app.post('/breed', (req,res) => {
    console.log(req.body.breed)
    petfinder.getBreedList(req.body.breed, function(err, breeds) {
    console.log(breeds);
    res.send(breeds);
    });
  })


}