    //  function slider() {
    //     $('.nextBtn').on('click', function() {
    //         $("#sliderList").animate({ marginLeft: `-100%` } ,1000, function() {  
    //             $(this).append($('li:first', this))
    //                    .css({ marginLeft: 0 })
    //         })
        
    //     })
    // }
    
    $('.nextBtn').on('click', function() {
        $("#sliderList").animate({ marginLeft: '-100%' } ,1000, function() {  
            $(this).append($('li:first', this))
                   .css({ marginLeft: 0 })
            $("#sliderList li > *").animate({ opacity: 1 })
        })
    })
    $('.prevBtn').on('click', function() {
        $("#sliderList").prepend($('#sliderList li:last'))
                        .css({ marginLeft: `-100%`})
                        .animate({ marginLeft: 0}, 1000, function() {
                            $("#sliderList li > *").animate({ opacity: 1 })
                        })
    })
    $('#btnGroup a').on('click', function() {
        $('#sliderList li > *').css({ opacity: 0 })
    })