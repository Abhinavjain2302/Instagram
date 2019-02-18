var Image =require('../models/imageSchema');
const User=require('../models/user-model');
var session = require('express-session');
var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;


var displayUser=function(req,res,next){
    
    if(req.session.userId){

     //   Image.find({}).populate({path: 'comments',populate:[{path:'commentBy'},{path:'replies',populate:{path:'replyBy'}}]}).exec(function(err,images){
     //     console.log(images);

     //   console.log(images[0].comments);
     // })

     
      // Image.find({},function(err,images){
      //  if(err) throw err;
      //  console.log(images);
      //   res.render('index',{result:images,userId:req.session.userId})
      // })
      Image.find({}).populate({path: 'comments',populate:[{path:'commentBy'},{path:'replies',populate:{path:'replyBy'}}]}).exec(function(err,images){
         console.log(images);

       console.log(images[0].comments);
        User.findOne({ _id: ObjectId(req.session.userId) },function(err,user){
         console.log(user);
        res.render('index',{result:images,userId:req.session.userId,user:user});

      })
    })


}
else{
	res.redirect('/');
}
}
module.exports=displayUser;