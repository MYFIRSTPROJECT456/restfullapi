var mongoose = require('mongoose');
var adsSchema = new mongoose.Schema({
		title : {type:String, unique:true}, 
		tags : {type:String, unique:true}, 
		discription : {type:String, unique:true}, 
		uploadimage : {type:String, unique:true}, 
		website : {type:String, unique:true}, 
		category : {type:String, unique:true}, 
		subcategory : {type:String, unique:true}, 
		state : {type:String, unique:true}, 
		city : {type:String, unique:true}, 
		locality : {type:String, unique:true}, 
		area : {type:String, unique:true}, 
		status : {type:String, unique:true} 
	});
var adsModel = mongoose.model('Ads', adsSchema);

module.exports = adsModel;