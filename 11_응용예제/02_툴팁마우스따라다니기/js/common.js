$("#tip").hide();

$("#area").on('mouseenter',function(){
    $("#tip").text($(this).data('title'));
    $("#tip").show();
})

$("#area").on('mouseleave',function(){
    $("#tip").hide();
})

$("#area").on('mousemove',function(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    $("#tip").css({top: mouseY +10, left: mouseX +10})
})