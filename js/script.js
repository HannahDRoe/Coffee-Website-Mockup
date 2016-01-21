

//Navbar Transition =======================================================
if ($(window).width() >= 768){
    $(document).ready(function (){       
       var scroll_start = 0;
       var startchange = $('#startChange');
       var offset = startchange.offset();
        if (startchange.length){
       $(document).scroll(function () { 
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(". ").css('background-color', 'rgba(58,39,22, 0.99)');
           } else {
               $(".navbar-fixed-top").css('background-color', 'transparent');
           }
        });
        }
    });
  

    // Back to top button ================================================
    var amountScrolled = 1800;

    $(window).scroll(function (){
        if ($(window).scrollTop() > amountScrolled) {
            $("#backToTop").fadeIn('slow');
        } else {
            $("#backToTop").fadeOut('slow');
        }
    });
}
    
// Bootstrap Scrollspy ====================================================
$('#navbar').scrollspy();
    

    
//Navbar collapse Hidden when an option is selected ======================
    $(document).ready(function(){
        $("#navAcross").click(function (event) {
            $(".navbar-collapse").collapse('hide');
    });
});
        

//Google Maps ============================================================
    function initialize( ) {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        
    }
    google.maps.event.addDomListener(window, 'load', initialize);


//Refresh when resized==========================

$(window).resize(function(){location.reload();});