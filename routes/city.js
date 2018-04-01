var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var citymodel = require('../model/citymodel');

router.get('/',function(req, res, next){
 console.log('Inside');

    citymodel.find({}, function(err, data){
        console.log('Error:'+err);
        res.send({data: data});
    });
});

router.post('/',function(req, res, next){

    console.log('Inside post'+req.body.cityname);    
    var newcity = new citymodel();
    newcity.cityname= req.body.cityname;
    newcity.save(function(err, data){
        if (err) {
            console.log('Error in saving'+err);
        } else{
            console.log(data);
            res.send({success: data.id});
        }

    });
});

router.post('/delete',function(req, res, next){

    citymodel.remove({"_id":req.body.cityid},function(err, data){
        if(err){
            console.log('Error in saving'+err);
        }else{
            res.send({success: data.id});
        }
    });
});

router.post('/update',function(req, res, next){
    
    citymodel.update({"_id":req.body.cityid }, {"cityname":req.body.cityname}, function(err, data){
        if (err) {
            console.log('Error in saving'+err);
        }else{
            res.send({success: data.id});
        }
    });
});

module.exports = router;