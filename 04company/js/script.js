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
  $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class"); //get

    if(toggle == "toggleMenu"){
      $(".toggleMenu").addClass("change");
      $("#main_menu").stop().animate({top:0});
    }else{
      $(".toggleMenu").removeClass("change");
      $("#main_menu").stop().animate({top:"-100%"});
    }
  });

  $(window).resize(function(){
    $("#main_menu").removeAttr("style");
    $(".toggleMenu").removeClass("change");
  });
});
