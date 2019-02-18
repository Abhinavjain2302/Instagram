const User=require('./user-model');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema=mongoose.Schema;

var replySchema= new Schema({
        replyBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        reply:{
            type:String
        }
});

var Reply =mongoose.model('Reply',replySchema);


module.exports=Reply;
