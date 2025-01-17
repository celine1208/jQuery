let num = 0;
let state = 1;

function sliderPrev (){
    $('.prevBtn').on('click', function(){
        num--;
        if( num === -1 ) {
            num = 4;
            $('#slider').prepend($('#slider li:last'))
            $('#slider').prepend($('#slider li:last'))
            $('#slider').prepend($('#slider li:last'))
            $('#slider').prepend($('#slider li:last'))
            .css({marginLeft:'-400%'})
            .animate({marginLeft:'-300%'}, 500, function(){
                state = 1;
                $('#slider').prepend($('#slider li:last'))
                .css({marginLeft:'-400%'})
            })
        }
        else {$('#slider').animate({marginLeft: `+=100%`},500),function(){
            state = 1;
        }}
        $('#btnNum a').removeClass('on');
        $("#btnNum a:eq(" + num + ")").addClass('on');
    })
}

function sliderNext (){
    $('.nextBtn').on('click', function(){
        $('#btnNum a').removeClass('on');
        num++;
        if (num === 5) {
            num = 0;
            $('#slider').append($('#slider li:first'))
                        .append($('#slider li:first'))
                        .append($('#slider li:first'))
                        .append($('#slider li:first'))
                        .css({marginLeft: 0})
                        .animate({marginLeft: `-100%`}, 500,function(){
                            state = 1;
                            $('#slider').append($('#slider li:first'))
                                        .css({marginLeft: 0})
                        })
        }
        else {
            $('#slider').animate({marginLeft: `-=100%`},500),function(){
                state = 1;
            }
        }
        $("#btnNum a:eq("+ num +")").addClass('on');
    })
}
sliderNext();

let timer = setInterval(sliderNext, 2000)

// 번호 버튼 클릭시 슬라이드
$('#btnNum a').on('click',function(){
    $('#slider').stop().animate({marginLeft: $(this).index() * '-100' + '%'})
    $('#btnNum a').removeClass('on');
    $(this).addClass('on');
})

$("#btnPos a, #btnNum a").on('click', function(e){
    e.preventDefault()
    timer = setInterval(sliderNext,2000)
})