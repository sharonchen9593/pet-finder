var path = require('path');
var LostAndFound = require('./models/lostandfound');
var petfinder = require('pet-finder-api')('e8bc141aa160a7c51a8460be64c1a929','12da585d090d6a12d72dac3dee07eb51');
var Fundraiser = require('./models/donations');
var User = require('./models/user');
var Authentication = require('./authentication');
var passport = require('passport');
var passportService = require('./services/passport');


module.exports=function(app) {

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

var currentUser = ""


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

  app.get('/profile', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  });

  app.get('/signout', function(req, res){
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

    app.get('/signout', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
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

  //POST Requests

  app.post('/login', requireSignin, Authentication.signin, function(req, res) {
    console.log(req)

  });

  app.post('/signup', Authentication.signup);

  app.post('/userData', function(req, res) {
    var body =req.body;
    User.findOne({username:body.username}, function(err, user) {
      res.json(user)
    })
  })



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
      description: req.body.description,
      donationsReceived: 0
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
      goal: req.body.goal,
      donationsReceived: req.body.donationsReceived
    });
    newFundraiser.save(function(err) {
      if (err) throw err;
      res.send('Success')
    })
  });

  app.post('/newdonation', (req, res) => {
    Fundraiser.findOneAndUpdate({_id:req.body._id},{$set:{donationsReceived:req.body.amountDonated}}, (err) => {
      res.send("success")
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