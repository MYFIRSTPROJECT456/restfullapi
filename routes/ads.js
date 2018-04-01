var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var adsmodel = require('../model/adsmodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside');
  
	//var state = new stateModel();
  	adsmodel.find({}, function(err, data) {
  		console.log('Error:'+err);
  		res.send({ data: data });	  
  	});  	
  
});

router.post('/', function(req, res, next) {
  
  console.log('Inside post:'+req.body.cityname);  
  console.log('Inside post:'+req.body.localityname);	
  var newads = new adsmodel();
  newads.title = req.body.title;
  newads.tags = req.body.tags;
  newads.discription = req.body.discription;
  newads.uploadimage = req.body.uploadimage;
  newads.website = req.body.website;
  newads.category = req.body.category;
  newads.subcategory = req.body.subcategory;
  newads.state = req.body.state;
  newads.city = req.body.city;
  newads.locality = req.body.localityname;
  newads.area = req.body.area;
  newads.status = req.body.status;
  newads.save(function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});

router.post('/delete', function(req, res, next) {
  console.log('Inisde'+req.body.adsid);
  adsmodel.remove({"_id":req.body.adsid}, function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  });
  
});

router.post('/update', function(req, res, next) {
  
 /* console.log('Inside post:'+req.body.localityname);	
  console.log('Inside post:'+req.body.cityname);	*/
  //var newstate = new stateModel();
  //newstate.categoryid = req.body.categoryid;
  adsmodel.update({"_id":req.body.adsid }, {"title" : req.body.title, 
    "tags" : req.body.tags,"discription" : req.body.discription, 
    "uploadimage" : req.body.uploadimage, "website" : req.body.website, 
    "category" : req.body.category, "subcategory" : req.body.subcategory, 
    "state" : req.body.state, "city" : req.body.city, 
    "locality" : req.body.locality, "area" : req.body.area, 
    "status" : req.body.status},function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});
module.exports = router;
