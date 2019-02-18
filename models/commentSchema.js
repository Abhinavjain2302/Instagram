const User=require('./user-model');
const Reply=require('./replySchema');


var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema=mongoose.Schema;

var commentSchema= new Schema({
        commentBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        comment:{
            type:String
        },
        replies:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Reply'
    }]

});

var Comment =mongoose.model('Comment',commentSchema);


module.exports=Comment;
