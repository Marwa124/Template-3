$(document).ready(function(){
  $('.bxslider').bxSlider({
      auto:true,
      pause:3500
  });
    /* btn Back To Top */
    $("#back-to-top").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    var about = $(".about").offset().top + 50;
    $(window).scroll(function(){
        var wscroll = $(window).scrollTop();
        if(wscroll > about){
            $("#back-to-top").fadeIn(500);
        }
        else{
            $("#back-to-top").fadeOut(500);
        }
    });
    
    /* Smooth NavLink Scroll to Section */
   $("a").click(function(){
       var hr = $(this).attr("href");
       var secOffset = $(hr).offset().top;
       $("html, body").animate({
           scrollTop: secOffset
       }, 1000);
   });
    
    /* Trigger niceScroll */
    $(function() {  
    $("html, body").niceScroll({
        cursorborder: 0,
        background: "#aaa"
    });
});
});