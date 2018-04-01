var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var categorymodel = require('../model/categorymodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside');
  
	//var state = new stateModel();
  	categorymodel.find({}, function(err, data) {
  		console.log('Error:'+err);
  		res.send({ data: data });	
  	});  	
  
});

router.post('/', function(req, res, next) {
  
  console.log('Inside post:'+req.body.categoryname);  
  console.log('Inside post:'+req.body.parentcatname);	
  var newcategory = new categorymodel();
  newcategory.categoryname = req.body.categoryname;
  newcategory.parentcatname = req.body.parentcatname;
  newcategory.save(function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});

router.post('/delete', function(req, res, next) {
  console.log('Inisde'+req.body.categoryid);
  categorymodel.remove({"_id":req.body.categoryid}, function(err, data){
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
  //newstate.categoryid = req.body.categoryid;
  categorymodel.update({"_id":req.body.categoryid, "categoryname" : req.body.categoryname, "parentcatname" : req.body.parentcatname},function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});
module.exports = router;
