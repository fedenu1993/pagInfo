$(document).ready(function(){

    if($("body").width() <= 678){
        
    
        $('.irArriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.irArriba').slideDown(500);
            } else {
                $('.irArriba').slideUp(500);
            }
        });

    }

});