var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var session = require('express-session');


var Image=require("../models/imageSchema");
var Comment =require('../models/commentSchema');

  var AddComments=function(req,res,next){
     
  var id = req.params.id;
  var myquery = { _id: ObjectId(id) };
  var userId=req.session.userId;
  //console.log(req.body.comment);
  
   new Comment({
    commentBy:userId,
    comment:req.body.comment
  }).save(function(err,result){
    if (err) throw err;

    Image.findByIdAndUpdate(id,{$push:{comments:result._id}},function(err,status){
      if (err) console.log(err);
    Image.find({ _id: ObjectId(id) }).populate({path: 'comments',populate:{path:'commentBy'}}).exec(function(err,images){
    console.log(images);
    res.send(images);
     })
  })
})

 }

module.exports=AddComments;