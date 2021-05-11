$(document).ready(function(){
  $(".slider").bxSlider({
    pager:false
  });
  const headerT = $("#headerTop").offset().top;
  $(window).scroll(function(){
    let scrollY = $(window).scrollTop();

    if( headerT < scrollY){
      $("#headerTop").addClass("fixed");

    }else{
      $("#headerTop").removeClass("fixed");

    }
  });

});
