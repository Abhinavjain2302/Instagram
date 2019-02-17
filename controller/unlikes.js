var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var session = require('express-session');


var Image =require('../models/imageSchema');

  var likesCount=function(req,res,next){
     
  var id = req.params.id;

  var myquery = { _id: ObjectId(id) };
   var userId=req.session.userId;
 
  Image.findOneAndUpdate(myquery,{$pull:{likedUserId :userId}},function(err,result){
    console.log(userId+"removed from array");
  })


  var newvalues = { $inc: { "totalLikes": -0.5 } };
  
  Image.findOneAndUpdate(myquery,newvalues,function(err,result){
  if(err) {
    console.log(err);
  }else{
    console.log("Data Updated");
  }
}).then(function(){ Image.find({ _id: ObjectId(id)},function(err,result){
        console.log(result);
        res.send(result);
    })
})
 }

module.exports=likesCount;