$(document).ready(function(){       
   var scroll_start =0;
   var startchange = $('#aboutUs');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(107, 121, 136, 0.96)');
       } else {
           $(".navbar").css('background-color', 'transparent');
       }
   });
    }
});

            
var amountScrolled = 2500;

$(window).scroll(function(){
    if ($(window).scrollTop() > amountScrolled) {
        $("#backToTop").fadeIn('slow');
    } else {
        $("#backToTop").fadeOut('slow');
    }
});
	