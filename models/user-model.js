var Image =require('./imageSchema');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var Schema=mongoose.Schema;

const userSchema=new Schema({
    username:String,
    email:String,
    password:String,
    images:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        }]
});

const User =mongoose.model('User',userSchema);


module.exports=User;
