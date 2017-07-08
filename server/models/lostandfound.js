var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lostAndFoundSchema = new Schema({
    email: String,
    phoneNumber: String,
    lostOrFound: String,
    imageStr: String,
    petName: String,
    dateLostOrFound: String,
    animal: String,
    breed: String,
    description: String
});

var lostAndFound = mongoose.model('Lost and Found', lostAndFoundSchema);

module.exports = lostAndFound;