const User=require('./user-model');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema=mongoose.Schema;

var imageSchema= new Schema({
    imagepath:String,
    totalLikes: { type: Number, default: 0 },
    likedUserId:[Schema.Types.ObjectId],
    comments:[{
        commentBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        comment:{
            type:String
        }

    }]
});

var Image =mongoose.model('Image',imageSchema);


module.exports=Image;
