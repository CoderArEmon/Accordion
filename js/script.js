$(document).ready(function(){
    $(".title1").click(function(){
        $(".content1").slideToggle();
        $(".g1").fadeIn();
        $(".demo").hide();
        $(".g2").hide();
        $(".g3").hide();
        $(".g4").hide();
    });

    $(".title2").click(function(){
        $(".content2").slideToggle();
        $(".g2").fadeIn();
        $(".demo").hide();
        $(".g1").hide();
        $(".g3").hide();
        $(".g4").hide();
    });

    $(".title3").click(function(){
        $(".content3").slideToggle();
        $(".g3").fadeIn();
        $(".demo").hide();
        $(".g1").hide();
        $(".g2").hide();
        $(".g4").hide();
    });

    $(".title4").click(function(){
        $(".content4").slideToggle();
        $(".g4").fadeIn();
        $(".demo").hide();
        $(".g1").hide();
        $(".g2").hide();
        $(".g3").hide();
    });
})

$(document).ready(function(){
    $('.card-header').click(function() {
        $(this).find('i').toggleClass('fas fa-chevron-down fas fa-chevron-up');
    });
})