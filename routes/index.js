var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const User=require('../models/user-model');
var session = require('express-session');


const upload = multer({
  dest: path.join(__dirname, '../upload')
});


var createUser=require('../controller/insert');
var displayUser=require('../controller/display');
var likes=require('../controller/likes');
var unlikes=require('../controller/unlikes');
var comments=require('../controller/comments');
var deleteUser=require('../controller/delete');
var loginUser=require('../controller/login');
var signupUser=require('../controller/signup')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.header('Cache-Control','no-cache, private,no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
   //console.log("session at /"+req.session.userId)
   if(req.session.userId){
   	res.redirect('/display');
   }else{
      res.render('login');
    }
});


router.post('/login',function(req,res,next){
    loginUser(req,res,next);

})

router.post('/signup',function(req,res,next){
   signupUser(req,res,next);
})



router.post('/insert', upload.single('image'), function (req, res, next) {
   createUser(req,res,next);
});


router.get('/display', function (req, res, next) {
	res.header('Cache-Control','no-cache, private,no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
       displayUser(req,res,next);
})


router.delete('/delete/:id', function (req, res, next) {
         deleteUser(req,res,next);
});


router.post('/likes/:id', function (req, res, next) {
        console.log("called");
        likes(req,res,next);
});


router.post('/unlikes/:id', function (req, res, next) {
        console.log("called");
        unlikes(req,res,next);
});

router.post('/comments/:id', function (req, res, next) {
        
        comments(req,res,next);
});

module.exports = router;
