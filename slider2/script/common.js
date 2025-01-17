let liLength = $('#slider li').length;
let num = 0;
let state = 1;

// next 버튼 함수
function nextSlide (){
    $("#slider li:eq(1)").addClass('active')
                   .css({opacity: 0})
                   .animate({opacity: 1},300, function(){
                    $('#slider').append($('#slider li:eq(0)'));
                    $('#slider li:last').removeClass('active');
                   })
    num++;
    if (num === 5) {num = 0};
    $("#btnNum a").removeClass('on');
    $("#btnNum a:eq("+ num +")").addClass('on');
}

//  prev 버튼 함수
function prevSlide (){
    $("#slider li:last").addClass('active')
                   .css({opacity: 0})
                   .animate({opacity: 1},300, function(){
                    $('#slider').prepend($('#slider li:last'));
                    $('#slider li:eq(1)').removeClass('active');
                   })
    num--;
    if (num === 5) {num = 0};
    $("#btnNum a").removeClass('on');
    $("#btnNum a:eq("+ num +")").addClass('on');
};

// 번호 버튼 함수
function numSlide (){
    $("#slider li:eq(" + $(this).index()+1 +")").addClass('active')
                   .css({opacity: 0})
                   .animate({opacity: 1},300, function(){
                    $('#slider').append($('#slider li:eq(0)'));
                    $('#slider li:last').removeClass('active');
                   })
                }


// next 함수 호출
$('.nextBtn').on('click',function(){
    clearInterval(timer);
    nextSlide();
   });

// prev 함수 호출
$('.prevBtn').on('click',function(){
    clearInterval(timer);
    prevSlide();
    });

// 번호 버튼 함수 호출
$('#btnNum a').on('click',function(){
    clearInterval(timer);
    $("#btnNum a").removeClass('on');
    $(this).addClass('on');
    numSlide();
    num = $(this).index();
    let slideNum = num + 1;
    console.log(slideNum);
    $(".slider" + slideNum).addClass('active')
                     .css({opacity: 0})
                     .animate({opacity: 1},300, function(){
                         $('#slider li').not($(this)).removeClass('active')
                         for(let i = 0; i < liLength-1; i++){
                                slideNum = (slideNum % liLength) + 1;
                                $("#slider").append($(".slider"+ slideNum));
                            }
                     })
});

// // 자동 슬라이드
let timer = setInterval(nextSlide, 2000)