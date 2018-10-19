var mongoose = require('mongoose');
var moment = require('moment');
var Reply = require('./reply');

var Schema = mongoose.Schema;

var ThreadSchema = new Schema(
	{
		board: {type: Schema.ObjectId, ref: 'Board', required: true},
		name: {type: String, default: "Anonymous", required: true, max: 30},
		subject: {type: String, max: 100},
		body: {type: String, max: 2000},
		date: {type: Date, default: Date.now, required: true},
		media: {type: String, required: true},
		replies: {type: Number, default: 0, required: true},
		bump: {type: Date, default: Date.now}
	}
);

module.exports = mongoose.model('Thread', ThreadSchema);

