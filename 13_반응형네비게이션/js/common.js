//창크기 800이상 일때 #gnb에 active 클래스 추가
function navHandler () {
    if($(this).width() > 800){
        $('#gnb').addClass('active').removeClass('mobile')
    } else {
        $('#gnb').removeClass('active').removeClass('mobiles');
    }
}
navHandler();

/* desktop */
// #gnb mouseenter 전체메뉴 슬라이드 다운
$(document).on('mouseenter','.active', function(){
    $('.active > #gnbList').stop().animate({height: 300}, 300);
});

// #gnb mouseleave 전체메뉴 슬라이드 업
$(document).on('mouseleave','.active', function(){
    $('.active > #gnbList').stop().animate({height: 75}, 300);
});

$(window).on('resize', function(){
    console.log($(this).width());
    navHandler();
});

/* mobile */
$('.mobileBtn').on('click', function(){
    $('#gnb').addClass('mobile');
})

$('.mobileClose').on('click',function(){
    $('#gnb').removeClass('mobile');
})