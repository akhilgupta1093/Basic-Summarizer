
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var schema1 = new Schema({
	text: {
		type: String,
		required: [true, 'Text field is required']
	},
});

var Text = mongoose.model('text', schema1)

module.exports = Text


