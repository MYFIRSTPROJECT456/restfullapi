var mongoose = require('mongoose');
var localitySchema = new mongoose.Schema({
		cityname : {type:String, unique:true}, 
		localityname : {type:String, unique:true} 
	});
var localityModel = mongoose.model('Locality', localitySchema);

module.exports = localityModel;