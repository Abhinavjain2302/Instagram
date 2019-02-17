var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var session = require('express-session');

var Image =require('../models/imageSchema');

  var AddComments=function(req,res,next){
     
  var id = req.params.id;
  var myquery = { _id: ObjectId(id) };
  var userId=req.session.userId;
  console.log(req.body.comment);
  // Person.findOneAndUpdate(myquery,{$push:{likedUserId :userId}},function(err,result){
  //   console.log(userId+"inserted into array");
  // })
  var comment={
    commentBy:userId,
    comment:req.body.comment
  }

  var newvalues = { $push: { "comments":comment } };
  
  Image.findOneAndUpdate(myquery,newvalues,function(err,result){
  if(err) {
    console.log(err);
  }else{
    console.log("Data Updated");
  }
}).then(function(){ Image.find({ _id: ObjectId(id)},function(err,result){
        console.log(result[0].comments);
        res.send(result);
    })
})
 }

module.exports=AddComments;