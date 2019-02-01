
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema=mongoose.Schema;

var image= new Schema({
    imagepath:String,
    userId:String,
    totalLikes: { type: Number, default: 0 },
    likedUserId:[String],
    comments:[{
    	 name:{
            type:String
        },
        uid:{
            type:String
        },
        comment:{
            type:String
        }

    }]
});

var Person =mongoose.model('Image',imageSchema);


module.exports=Person;
