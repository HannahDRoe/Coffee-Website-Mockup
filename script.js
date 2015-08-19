$(document).ready(function(){       
   var scroll_start =0;
   var startchange = $('#aboutUs');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(239, 246, 253, 0.99)');
       } else {
           $(".navbar").css('background-color', 'transparent');
       }
   });
    }
});
