// 버튼클릭시 번호에 해당하는 슬라이드로
$('#btnNum a').on('click',function(){
    $('#slider').animate({marginLeft: `${$(this).index() * -100}%`},300)
    $('#btnNum a').removeClass('on');
    $(this).addClass('on');
})

// 우측버튼 클릭시
let num = 0;
let state = 1;
$('.nextBtn').on('click',function(){
    clearInterval(timer);
    timer = setInterval(autoSlide, 2000);
    if (state === 1) {
        state = 0;
        num++;
        console.log(num);
        if(num === 5){
        num = 0;
        console.log(num);
        $('#slider').append($('#slider li:first'))
                    .append($('#slider li:first'))
                    .append($('#slider li:first'))
                    .append($('#slider li:first'))
                    .css({marginLeft:0})
                    .animate({marginLeft: `-100%`}, 500, function(){
                        state = 1;
                        $('#slider').append($('#slider li:first'))
                                    .css({marginLeft: 0})
                        })
        }
    else {
        $('#slider').animate({marginLeft: `-=100%`},500, function(){
            state = 1;
        });
    }
    $('#btnNum a').removeClass('on');
    $("#btnNum a:eq("+ num +")").addClass('on');
    }

});

// 좌측버튼 클릭시
$('.prevBtn').on('click',function(){
    clearInterval(timer);
    timer = setInterval(autoSlide, 2000);
    if (state === 1) {
        state = 0;
        num--;
        if( num === -1){
            num = 4;
            $('#slider').prepend($('#slider li:last'))
                        .prepend($('#slider li:last'))
                        .prepend($('#slider li:last'))
                        .prepend($('#slider li:last'))
                        .css({marginLeft:`-400%`})
                        .animate({marginLeft:`-300%`}, 500, function(){
                        state = 1;
                        $('#slider').prepend($('#slider li:last'))
                                    .css({marginLeft:'-400%'})
            })
        }
        else {
        $('#slider').animate({marginLeft: `+=100%`}, 500, function(){
        state = 1;
        });
        $('#btnNum a').removeClass('on');
        $("#btnNum a:eq("+ num +")").addClass('on');
        };
    };
});

// 자동재생
function autoSlide() {
    if (state === 1) {
    state = 0;
        num++;
        console.log(num);
        if(num === 5){
            num = 0;
            console.log(num);
            $('#slider').append($('#slider li:first'))
                        .append($('#slider li:first'))
                        .append($('#slider li:first'))
                        .append($('#slider li:first'))
                        .css({marginLeft:0})
                        .animate({marginLeft: `-100%`}, 500, function(){
                            state = 1;
                            $('#slider').append($('#slider li:first'))
                                        .css({marginLeft: 0})
                        })
        }

        else {
            $('#slider').animate({marginLeft: `-=100%`},500 ,function(){
            state = 1;
            });
        }
        $('#btnNum a').removeClass('on');
        $("#btnNum a:eq("+ num +")").addClass('on');
    }
}

let timer = setInterval(autoSlide, 2000);

// 자동재생 멈추기
$('#pauseBtn').on('click',function(){
    clearInterval(timer);
})

// 자동재생 다시 시작하기
$('#playBtn').on('click',function(){
    timer = setInterval(autoSlide, 2000);
})

$("#btnPos a, #btnNum a").on('click', function(e){
    e.preventDefault()
    clearInterval(timer);
    timer = setInterval(autoSlide,2000)
    let index = $(this).index();
    num = index; // 슬라이드 번호 업데이트

    $('#slider').animate({marginLeft: `-${index * 100}%`}, 500, function(){
        state = 1;
    });

    $('#btnNum a').removeClass('on');
    $("#btnNum a:eq("+ num +")").addClass('on');
});