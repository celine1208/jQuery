let liLength = $('#slider li').length;
let num = 0;
let index = 0
let state = 1;

$("#slider li:eq(0)").css({ zIndex: 1 })

// 번호 버튼 함수
function numFade(){
    num = $(this).index();
    index++;
    $("#slider li:eq("+num+")").css({ zIndex: index, opacity: 0 })
                               .animate({ opacity: 1 }, function() {
                                index = 1
                                $("#slider li").not($(this)).css({ zIndex: 0 })
                                $(this).css({ zIndex: 1 })
                               })
    $("#btnNum a").removeClass('on')
    $(this).addClass('on')
}

// 번호 버튼 함수 호출
$('#btnNum a').on('click',function(){
   numFade()
})
                            

// 다음 버튼 함수
function nextFade() {
    num++;
    index++;
    if (num == 5) num = 0
    $("#slider li:eq("+num+")").css({ zIndex: index, opacity: 0 })
                               .animate({ opacity: 1 }, function() {
                                index = 1
                                $("#slider li").not($(this)).css({ zIndex: 0 })
                                $(this).css({ zIndex: 1 })
                               })
    $("#btnNum a").removeClass('on')
    $("#btnNum a:eq(" + num +")").addClass('on')
}
// 다음 버튼 함수 호출
$('.nextBtn').on("click", function() {
    nextFade()
})

// 이전 버튼 함수
function prevFade() {
    num--;
    index++;
    if (num == -1) num = 4
    $("#slider li:eq("+num+")").css({ zIndex: index, opacity: 0 })
                               .animate({ opacity: 1 }, function() {
                                index = 1
                                $("#slider li").not($(this)).css({ zIndex: 0 })
                                $(this).css({ zIndex: 1 })
                               })
    $("#btnNum a").removeClass('on')
    $("#btnNum a:eq(" + num +")").addClass('on')
}
// 이전 버튼 함수 호출
$(".prevBtn").on('click', function() {
    prevFade()
})
