var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;


var Comment =require('../models/commentSchema');

var Image=require("../models/imageSchema");

var deleteComment=function(req,res,next){

    Comment.findOneAndRemove({ _id: ObjectId(req.params.id) },function(err,result){
     if(err) console.log(err);
      
      Image.update({"comments":req.params.id},{"$pull":{"comments":req.params.id}},function(err,result2){
         console.log("Deleted");
        res.send("success");

      })
     
  })
}

module.exports=deleteComment;