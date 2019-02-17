var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
const fs=require('fs');
const path = require("path");

var Image =require('../models/imageSchema');


var deleteUser=function(req,res,next){
    Image.find({ _id: ObjectId(req.params.id)},function(err,result){
        var tempPath=path.join(__dirname,"/upload/");
        console.log(tempPath);
        console.log(result);
        console.log(typeof result.imagepath);
    })



    Image.remove({ _id: ObjectId(req.params.id) },function(err,result){
   if(err){
    console.log(err);
   }
   console.log("Deleted");
   


   res.send("success");
  })
}

module.exports=deleteUser;