var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var donationsSchema = new Schema({
    email: String,
    phoneNumber: String,
    suppliesOrFunds: String,
    imageStr: String,
    location: String,
    title: String,
    venmo: String,
    paypal: String,
    description: String,
    goal: String
});

var donations = mongoose.model('Donations', donationsSchema);

module.exports = donations;