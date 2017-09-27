$(document).ready(function(){
    $(".title-container h1").hide();
    $(".title-container h2").hide();
    $(".opaque").hide().delay(100).fadeIn(1000, function(){
        $(".title-container h1").delay(100).fadeIn(900, function(){
            $(".title-container h2").fadeIn(900);
        });
    });
   

    
})