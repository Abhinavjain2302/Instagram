const fs=require('fs');
const path = require("path");
var session = require('express-session');

const User=require('../models/user-model');


var Image=require("../models/imageSchema");

var createUser=function(req,res,next){
   console.log("id is"+ req.session.userId);
   const tempPath = req.file.path;
   console.log(tempPath);
   if ((path.extname(req.file.originalname).toLowerCase() === ".png")||(path.extname(req.file.originalname).toLowerCase() === ".jpg")) {
     
     var image=  Image({
     imagepath:req.file.filename
     //userId:req.session.userId
    })  
    
    image.save(function(err,result){
     if(err) throw err;
     console.log(result);
     User.findByIdAndUpdate(req.session.userId,{$push:{images:result._id}},function(err,results){
      if(err) throw err;
      console.log(results)

          res.redirect('/display')
     }) 
    })
      } else {
       fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);
       res.render('alert');
      
      });
    }

   


}


module.exports=createUser;