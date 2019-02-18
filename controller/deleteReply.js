var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

var Reply =require('../models/replySchema');
var Comment =require('../models/commentSchema');

var deleteReply=function(req,res,next){

    Reply.findOneAndRemove({ _id: ObjectId(req.params.id) },function(err,result){
     if(err) console.log(err);
      
      Comment.update({"replies":req.params.id},{"$pull":{"replies":req.params.id}},function(err,result2){
         console.log("Deleted");
        res.send("success");

      })
     
  })
}

module.exports=deleteReply;