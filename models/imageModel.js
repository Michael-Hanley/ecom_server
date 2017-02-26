var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = new Schema({
    url: String,
    location: String,
    orientation: String,
});

var Images = mongoose.model('Images', imageSchema);

module.exports = Images;