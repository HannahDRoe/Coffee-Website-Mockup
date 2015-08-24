
$(document).ready(function(){       
   var scroll_start = 300;
   var startchange = $('#startChange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-fixed-top").css('background-color', 'rgba(99, 124, 150, 0.99)');
       } else {
           $(".navbar-fixed-top").css('background-color', 'transparent');
       }
   });
    }
});

// Back to top button 
var amountScrolled = 2500;

$(window).scroll(function(){
    if ($(window).scrollTop() > amountScrolled) {
        $("#backToTop").fadeIn('slow');
    } else {
        $("#backToTop").fadeOut('slow');
    }
});

