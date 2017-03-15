const mongoose = require('mongoose');
const service = require('feathers-mongoose');
// A module that exports your Mongoose model
// const Message = require('../../models/message/Message.model.js');
// Make Mongoose use the ES6 promise
mongoose.Promise = global.Promise;

var messageSchema = mongoose.Schema({
    name: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = function(){
  	const app = this;
	mongoose.connect('mongodb://admin:password@ds023550.mlab.com:23550/meandemowoodypowr5');
	app.use('/messages', service({ Model: Message }));
};

