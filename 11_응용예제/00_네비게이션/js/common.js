// $('#gnbList > li').each(function(){
//     let pos = $(this).position().left;
    // $('.snb:eq(0)').css({left:$("#gnbList > li:eq(0)").position().left + $('#gnbList > li:eq(0) > a').width()/2, transform: `translateX(-50%)`})
    // $('.snb:eq(1)').css({left:$("#gnbList > li:eq(1)").position().left + $('#gnbList > li:eq(1) > a').width()/2, transform: `translateX(-50%)`})
    // $('.snb:eq(2)').css({left:$("#gnbList > li:eq(2)").position().left + $('#gnbList > li:eq(2) > a').width()/2, transform: `translateX(-50%)`})
    // $('.snb:eq(3)').css({left:$("#gnbList > li:eq(3)").position().left + $('#gnbList > li:eq(3) > a').width()/2, transform: `translateX(-50%)`})

    // $('.snb:eq(0)').width()/2;
    // $('.snb:eq(1)').width()/2;
    // $('.snb:eq(2)').width()/2;
    // $('.snb:eq(3)').width()/2;

    // $('#gnbList li:eq(0) a').width()/2;
    // $('#gnbList li:eq(1) a').width()/2;
    // $('#gnbList li:eq(2) a').width()/2;
    // $('#gnbList li:eq(3) a').width()/2;
// })

function snbPos() {
    $('#gnbList > li').each(function(index) {
        $('.snb').eq(index).css({
            left: $(this).position().left + $(this).children().width() / 2,
            transform: 'translateX(-50%)'
        });
    });
}
snbPos();
$(window).on('resize',snbPos);


$('.snb').hide();
$('#gnbList > li').hover(function(){
    $(this).children('.snb').stop().slideDown();
},function(){
    $(this).children('.snb').stop().slideUp();
});

$(window).on('scroll',function(){
    console.log(scrollY);
    if (scrollY > 686){
        // $('#header').css({backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(233, 233, 233, 0.1))`});
        $('#gnbList > li > a').css({color: '#000'})
    }
    else {
        $('#gnbList > li > a').css({color: '#fff'})
    }
})