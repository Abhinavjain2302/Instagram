//for delete of comment
$(document).ready(function(){
 $(document).on('click', '.deleteComment', deleteComment);

});


function deleteComment(){
var confirmation=confirm("Are You sure?");
var target = this;
if(confirmation){
    $.ajax({
        type:'DELETE',
        url:'/delete/'+$(this).data('id')
    }).done(function(response){
      $(target).parent().parent().remove();
    })
}
else{
    return false;
}
}

//for delete of reply
$(document).ready(function(){
 $(document).on('click','.deleteReply',deleteReply);

});


function deleteReply(){
var confirmation=confirm("Are You sure?");
if(confirmation){
    $.ajax({
        type:'DELETE',
        url:'/deleteReply/'+$(this).data('id')
    }).done(function(response){
        location.reload(true);
        
    })
}
else{
    return false;
}
}



//for delete of Image
$(document).ready(function(){
 $('.deleteImage').on('click',deleteImage);

});


function deleteImage(){
var confirmation=confirm("Are You sure?");
if(confirmation){
    $.ajax({
        type:'DELETE',
        url:'/deleteImage/'+$(this).data('id')
    }).done(function(response){
        location.reload(true);
        
    })
}
else{
    return false;
}
}


//for comment addition form
$(document).ready(function(){
 $('.addComment').on('click',addComment);

});

    function addComment(){
      
        var value=$(this).data('id');
        $.ajax({
            url: '/comments/'+$(this).data('id'),
            type: 'POST',
            data:  { comment: $('#name'+value).val() },
            success: function(data){
              console.log(data);
              console.log(data[0].comments.length);
              var length=data[0].comments.length;

$("#list-comments"+value).append('<li><pre><b>'+data[0].comments[length-1].commentBy.username+'</b> :'+data[0].comments[length-1].comment+' <input type="button"   value="Delete" data-id="'+data[0].comments[length-1]._id+'"  class="deleteComment"  ></input><a href="#"   class="Reply" data-id="<%=i%>">Reply</a></pre></li>');

              }
            
        });
    }




//for replybox addition form
$(document).ready(function(){
 $('.addReply').on('click',addReply);

});

    function addReply(){
       var value=$(this).data('id');
        $.ajax({
            url: '/reply/'+$(this).data('id'),
            type: 'POST',
            data:  { reply: $('#replyname'+value).val() },
            success: function(data){
             
              console.log(data);
              //console.log(data[0].comments.length);
              var length=data[0].replies.length;
                  debugger
$("#list-reply"+value).append('<li><pre>    <b>'+data[0].replies[length-1].replyBy.username+'</b> :  '+data[0].replies[length-1].reply+' <input type="button"   value="Delete Reply" data-id="'+data[0].replies[length-1]._id+'"  class="deleteReply"  ></input></pre></li>');
$("#header").find(".reply-ul-box.active").removeClass("active");
        
              }
            
        });
    };




//for comments text box
$(document).ready(function(){
 $('.Comments').on('click',myFunction);

});

function myFunction(){
    console.log($(this).data('id'));
    var x=document.getElementsByClassName('same')[$(this).data('id')];
    if (x.style.display === "none")
        x.style.display = "block";
    else
      x.style.display = "none";
}


//for reply text box
$(document).ready(function(){
 $('.Reply').on('click',myFunction1);

});

function myFunction1(){
  var replyUlBox = $(this).parents("li").find("ul.reply-ul-box");
  var result= replyUlBox.data("clickCheck")

  if(result){
    $("#header").find(".reply-ul-box.active").removeClass("active");
    replyUlBox.addClass("active");
    replyUlBox.data("clickCheck", false);
  }
  else{
    $("#header").find(".reply-ul-box.active").removeClass("active");
    replyUlBox.data("clickCheck", true);
  }
 
  // replyUlBox.find("#replyname").focus();
}




$(function() {
    $('.like-button').click(function(){
        var obj = $(this);
        if( obj.data('liked') ){
            obj.data('liked', false);
            obj.html('Like');
        }
        else{
            obj.data('liked', true);
            obj.html('Unlike');
        }
    });
});







//for like unlike button
$(document).ready(function(){

    // like and unlike click
    $(".like").click(function(){
        var id = this.id;   // Getting Button id
       // var postid=this.data('id');
      var obj = $(this);
      
        var split_id = id.split("_");

         var text = split_id[0];
         var postid = split_id[1];  // postid

        var value=this.value;
        console.log(value);
        // Finding click type
      
          if(value=='Unlike'){

           // AJAX Request
           this.value='Like'
          $.ajax({
            url: '/unlikes/'+$(this).data('id'),
            type: 'POST',
            success: function(data){
                var likes = data[0].totalLikes;
               // var unlikes = data['unlikes'];

                $("#likes_"+postid).text(likes);        // setting likes
               // $("#unlikes_"+postid).text(likes);    // setting unlikes

            
                   // $("#like_"+postid).css("color","#ffa449");
                   $("#like_"+postid).css("color","lightseagreen");
              }
            
        });
  }
   else{
          this.value='Unlike';
    
            
                  $.ajax({
            url: '/likes/'+$(this).data('id'),
            type: 'POST',
            success: function(data){
                var likes = data[0].totalLikes;
                console.log(data);
                console.log(likes)
               // var unlikes = data['unlikes'];

                $("#likes_"+postid).text(likes);        // setting likes
               // $("#unlikes_"+postid).text(unlikes);    // setting unlikes

            
                    $("#like_"+postid).css("color","#ffa449");
                   // $("#unlike_"+postid).css("color","lightseagreen");
              }
            
        });

}


    });

});

