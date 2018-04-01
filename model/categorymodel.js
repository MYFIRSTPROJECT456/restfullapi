var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({
		categoryname : {type:String, unique:true}, 
		parentcatname : {type:String, unique:true} 
	});
var categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;