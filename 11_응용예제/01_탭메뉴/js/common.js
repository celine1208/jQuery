$("wrap article ul").hide();
$("#wrap article .on").next().show();

$("#wrap h3").on('click',function(){
    $("#wrap h3").removeClass('on')
    $("#wrap article ul").hide();

    $(this).addClass('on');
    $(this).next().show();
})