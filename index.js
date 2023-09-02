$(document).ready(function(){
let aboutOffset = $("#About").offset().top;

$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();

    if(windowScroll > aboutOffset - 70)
    {
        $('#mainNav').css('backgroundColor' , 'rgba(0,0,0,0.7)')
        $('#btnUp').fadeIn(500);
    }
    else
    {
        $('#mainNav').css('backgroundColor' , 'transparent')
        $('#btnUp').fadeOut(500);
    }
})

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},0);
})


// $("a[href^='#']").click(function(e){
//     let linkHref = $(e.target).attr('href');
//     let sectionHref = $(linkHref).offset().top;
//     $("html,body").animate({scrollTop:sectionHref},2000);
// })


$("#loading .sk-chase").fadeOut(1000,function(){
     $("#loading").fadeOut(1000 , function(){
      $("#loading").remove();
      $("body").css('overflow','auto');
        });
    });

})






