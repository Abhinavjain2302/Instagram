var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var session = require('express-session');

var Person =require('../models/personSchema');

  var likesCount=function(req,res,next){
     
  var id = req.params.id;
  var myquery = { _id: ObjectId(id) };
  var userId=req.session.userId;
  Person.findOneAndUpdate(myquery,{$push:{likedUserId :userId}},function(err,result){
    console.log(userId+"inserted into array");
  })

  var newvalues = { $inc: { "totalLikes": 0.5 } };
  
  Person.findOneAndUpdate(myquery,newvalues,function(err,result){
  if(err) {
    console.log(err);
  }else{
    console.log("Data Updated");
  }
}).then(function(){ Person.find({ _id: ObjectId(id)},function(err,result){
        console.log(result);
        res.send(result);
    })
})
 }

module.exports=likesCount;