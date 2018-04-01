var mongoose = require('mongoose');
var stateSchema = new mongoose.Schema({
        username : {type:String, unique:true}, 
        mobileno : {type:String, unique:true},
        emailid : {type:String, unique:true},
        status : {type:String, unique:true},
        upassword : {type:String, unique:true}
    });
var userModel = mongoose.model('adduser', stateSchema);

module.exports = userModel;