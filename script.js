$(document).ready(function() {
    $('#accordeon .acc-head').on('click', f_acc);
    $('.acc-head img').on('click', f_rotate);
});

function f_acc(){
    //$('#accordeon .ac-body').slideUp(1000);
    $('#accordeon .acc-body').not( $(this).next()   ).slideUp(1000);
    $(this).next().slideToggle(2000);
}
function f_rotate() {
    $(this).toggleClass('transform');
}
$(window).resize(function () {
    if($(window).width() <= 992){
        $('.col-lg-2').removeClass('offset-5');
    };
    if($(window).width() >= 992){
        $('.col-lg-2').addClass('offset-5');
    };
});

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

$(document).ready(function() {
    var btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});
$(document).ready(function() {
    $("a.scroll-to").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


});
