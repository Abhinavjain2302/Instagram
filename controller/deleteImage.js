var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
const fs=require('fs');
const path = require("path");

var Image =require('../models/imageSchema');
const User=require('../models/user-model');

var Comment =require('../models/commentSchema');


var deleteImage=function(req,res,next){
    
    // Image.find({ _id: ObjectId(req.params.id)},function(err,result){
    //     var tempPath=path.join(__dirname,"/upload/");
    //     console.log(tempPath);
    //     console.log(result);
    //     console.log(typeof result.imagepath);
    // })



    Image.findOneAndRemove({ _id: ObjectId(req.params.id) },function(err,result){
   if(err){
    console.log(err);
   }
         User.update({"images":req.params.id},{"$pull":{"images":req.params.id}},function(err,result2){
         //console.log("Deleted");
          var commentList = result.comments;
                    Comment.remove({ "_id": { "$in": commentList } })
                                .exec(function (err, res){
                                    if (err) throw err;
                                })


          res.send("success");

         })     
  })
}

module.exports=deleteImage;