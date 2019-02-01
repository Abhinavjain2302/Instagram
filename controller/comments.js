// var mongojs = require('mongojs');
// var ObjectId = mongojs.ObjectId;
// var session = require('express-session');

// var Person =require('../models/personSchema');

//   var AddComments=function(req,res,next){
     
//   var id = req.params.id;
//   var myquery = { _id: ObjectId(id) };
//   var userId=req.session.userId;
//   // Person.findOneAndUpdate(myquery,{$push:{likedUserId :userId}},function(err,result){
//   //   console.log(userId+"inserted into array");
//   // })
//   var comment={
//     uid:userId,
//     name:req.session.name,
//     comments:req.body.comments
//   }

//   var newvalues = { $push: { "comments": } };
  
//   Person.findOneAndUpdate(myquery,newvalues,function(err,result){
//   if(err) {
//     console.log(err);
//   }else{
//     console.log("Data Updated");
//   }
// }).then(function(){ Person.find({ _id: ObjectId(id)},function(err,result){
//         console.log(result);
//         res.send(result);
//     })
// })
//  }

// module.exports=AddComments;