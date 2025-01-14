$('.list li').on('mouseenter',function(){
    console.log($(this).position().top)
    console.log($(this).index() * $(this).height())
    $('.arrow').stop().animate({top:$(this).position().top})
})