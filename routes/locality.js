var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var localitymodel = require('../model/localitymodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside');
  
	//var state = new stateModel();
  	localitymodel.find({}, function(err, data) {
  		console.log('Error:'+err);
  		res.send({ data: data });	  
  	});  	
  
});

router.post('/', function(req, res, next) {
  
  console.log('Inside post:'+req.body.cityname);  
  console.log('Inside post:'+req.body.localityname);	
  var newlocality = new localitymodel();
  newlocality.cityname = req.body.cityname;
  newlocality.localityname = req.body.localityname;
  newlocality.save(function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});

router.post('/delete', function(req, res, next) {
  console.log('Inisde'+req.body.localityid);
  localitymodel.remove({"_id":req.body.localityid}, function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  });
  
});

router.post('/update', function(req, res, next) {
  
  console.log('Inside post:'+req.body.localityname);	
  console.log('Inside post:'+req.body.cityname);	
  //var newstate = new stateModel();
  //newstate.categoryid = req.body.categoryid;
  localitymodel.update({"_id":req.body.localityid, "cityname" : req.body.cityname, "localityname" : req.body.localityname},function(err, data){
  	if (err) {
  		console.log('Error in saving'+err);
  	} else {
  		console.log(data);
  		res.send({ success: data.id });
  	}
  })
  
});
module.exports = router;
