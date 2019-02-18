var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var session = require('express-session');


var Reply=require("../models/replySchema");
var Comment =require('../models/commentSchema');

  var Addreplies=function(req,res,next){
     
  var id = req.params.id;
  var myquery = { _id: ObjectId(id) };
  var userId=req.session.userId;
  console.log(req.body.reply);
  
   new Reply({
    replyBy:userId,
    reply:req.body.reply
  }).save(function(err,result){
    if (err) throw err;

    Comment.findByIdAndUpdate(id,{$push:{replies:result._id}},function(err,status){
      if (err) console.log(err);
    Comment.find({ _id: ObjectId(id) }).populate('commentBy').populate({path: 'replies',populate:{path:'replyBy'}}).exec(function(err,result2){
    console.log("Comment populate");
    console.log(result2);
   // console.log(result2[0].replies)
    res.send(result2);

     })
  })
})

 }

module.exports=Addreplies;