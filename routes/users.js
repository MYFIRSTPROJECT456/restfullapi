var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var userModel = require('../model/usermodel');

router.get('/', function(req, res, next){
    userModel.find({},function(err, data){
        res.send({data:data});
    });
});

router.post('/',function(req, res, next){
    var newuser = new userModel();
    newuser.username = req.body.username;
    newuser.mobileno = req.body.mobileno;
    newuser.emailid = req.body.emailid;
    newuser.status = req.body.status;
    newuser.upassword = req.body.upassword;
    newuser.save(function(err, data){
        if(err){
            console.log('Error in savings'+err);
        }else{
            res.send({success:data.id});
        };
    });    
});

router.post('/delete', function(req, res, next) {
    userModel.remove({"_id":req.body.userid}, function(err, data){
        if(err){
            console.log('Error in savings'+err);
        }else{
            console.log(data);
            res.send({ success: data.id });
        }
    });
});


router.post('/update', function(req, res, next){
  userModel.update({"_id":req.body.userid, "username":req.body.username, 
        "mobileno":req.body.mobileno, "emailid":req.body.emailid,
        "status":req.body.status, "upassword":req.body.upassword }, function(err, data){
    if (err) {
      console.log('Error in saving'+err);
    }else{
      res.send({success: data.id});
    }

  });
});


module.exports = router;
