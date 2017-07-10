var User = require('./models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function tokenForUser(user) {
  var timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req, res, next) {
  // already signed in, need to give them token

  res.send({token: tokenForUser(req.user)})
};

exports.signup = function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({error: 'Email and Password Required'})
  }

  User.findOne({email: email}, function(err, existingUser) {
    if (err) { return next(err); }

    //if email does exist, return error
    if (existingUser) {
      return res.status(422).send({error: 'Email Already Exists'}); // unprocessable entity status
    }

    //if email doesn't exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err){
      if (err) { return next(err)}
      //respond to request indicating user created
      res.json({token: tokenForUser(user)});

    });
  });


  // see if user with email exists
};