var mongoose = require('mongoose');
var stateSchema = new mongoose.Schema({
		statename : {type:String, unique:true} 
	});
var stateModel = mongoose.model('State', stateSchema);

module.exports = stateModel;