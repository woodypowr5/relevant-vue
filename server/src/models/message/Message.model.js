const mongoose = require('mongoose');

module.exports = function(){

var messageSchema = mongoose.Schema({
    name: String
});

var Message = mongoose.model('Message', messageSchema);

