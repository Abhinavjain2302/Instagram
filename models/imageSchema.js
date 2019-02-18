const Comment=require('./commentSchema');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema=mongoose.Schema;

var imageSchema= new Schema({
    imagepath:String,
    totalLikes: { type: Number, default: 0 },
    likedUserId:[Schema.Types.ObjectId],
    comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment'
    }]
});

var Image =mongoose.model('Image',imageSchema);


module.exports=Image;
