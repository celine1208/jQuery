$(".right").on('click',function(){
    $('.scroll:not(:animated)').animate({scrollLeft: `+=100`},100)
})

$(".left").on('click',function(){
    $('.scroll:not(:animated)').animate({scrollLeft: `-=100`},100)
})