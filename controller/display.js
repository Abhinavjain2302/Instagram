var Image =require('../models/imageSchema');
var session = require('express-session');


var displayUser=function(req,res,next){
    
    if(req.session.userId){
     
      Image.find({},function(err,images){
       if(err) throw err;
       console.log(images);
        res.render('index',{result:images,userId:req.session.userId})
      })
}
else{
	res.redirect('/');
}
}
module.exports=displayUser;