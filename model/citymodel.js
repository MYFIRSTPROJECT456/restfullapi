var mongoose = require('mongoose');
var citySchema = new mongoose.Schema({
        cityname : {type:String, unique:true} 
    });
var cityModel = mongoose.model('City', citySchema);

module.exports = cityModel;