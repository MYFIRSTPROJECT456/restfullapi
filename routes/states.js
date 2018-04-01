var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var stateModel = require('../model/statemodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside');
  
	//var state = new stateModel();
  	stateModel.find({}, function(err, data) {
  		console.log('Error:'+err);
  		res.send({ data: data });	
  	});  	
  
});

router.post('/', function(req, res, next) {
  
  console.log('Inside post'+req.body.statename);	
  var newstate = new stateModel();
  newstate.statename = req.body.statename;
  newstate.save(function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});

router.post('/delete', function(req, res, next) {
  console.log('Inisde'+req.body.stateid);
  stateModel.remove({"_id":req.body.stateid}, function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  });
  
});

router.post('/update', function(req, res, next) {
  
  console.log('Inside post:'+req.body.stateid);	
  console.log('Inside post:'+req.body.statename);	
  //var newstate = new stateModel();
  newstate.stateid = req.body.stateid;
  stateModel.update({"_id":req.body.stateid, "statename" : req.body.statename},function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});
module.exports = router;
