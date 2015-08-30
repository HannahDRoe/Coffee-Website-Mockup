if($(window).width() >= 768){
    $(document).ready(function(){       
       var scroll_start = 0;
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
    var amountScrolled = 2600;

    $(window).scroll(function(){
        if ($(window).scrollTop() > amountScrolled) {
            $("#backToTop").fadeIn('slow');
        } else {
            $("#backToTop").fadeOut('slow');
        }
    });
//Adding the active class to navbar
    $(document).ready(function(){
      $('ul li a').scroll(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
      });
    });
}


    $(document).ready(function(){
        $(".navbar-nav li a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });
