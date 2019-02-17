//for delete
$(document).ready(function(){
 $('.deleteUser').on('click',deleteUser);

});


function deleteUser(){
var confirmation=confirm("Are You sure?");
if(confirmation){
    $.ajax({
        type:'DELETE',
        url:'/delete/'+$(this).data('id')
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
    /* attach a submit handler to the form */
    function addComment(){

      // /* Send the data using post with element id name and name2*/
      // var posting = $.post( url, { name: $('#name').val() } );

      // /* Alerts the results */
      // posting.done(function( data ) {
      //  console.log(data);
      // });
        $.ajax({
            url: '/comments/'+$(this).data('id'),
            type: 'POST',
            data:  { comment: $('#name').val() },
            success: function(data){
              console.log(data);
               //  var likes = data[0].totalLikes;
               // // var unlikes = data['unlikes'];

               //  $("#likes_"+postid).text(likes);        // setting likes
               // // $("#unlikes_"+postid).text(likes);    // setting unlikes

            
               //     // $("#like_"+postid).css("color","#ffa449");
               //     $("#like_"+postid).css("color","lightseagreen");
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
      
        // if(text == "like"){
          // if((document.getElementsById("#like_"+postid).value)=='unlike'){
          //   obj.data('liked',true);
          // }
          //console.log((document.getElementById("#like_"+postid).value))
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

