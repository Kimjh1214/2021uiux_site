$(document).ready(function(){
  $(".slider").bxSlider({
    pager:false,
    controls:false
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

  $(".lang a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class"); //get

    if(toggle == "toggleMenu"){
      $(".toggleMenu").addClass("change");
      $("#main_menu").stop().animate({top:0});
      $("#headerTop").addClass("fixed");
      $("#headerTop").on("scroll touchmove mousewheel", function(event){
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }else{
      $(".toggleMenu").removeClass("change");
      $("#main_menu").stop().animate({top:"-100%"});
      $("#headerTop").removeClass("fixed")
    }
  });

  let winWidth = $(window).innerWidth();
  allView();

  $(window).resize(function(){
    $("#main_menu").removeAttr("style");
    $(".toggleMenu").removeClass("change");
    winWidth = $(window).innerWidth();
    allView();
  });
  console.log(winWidth);

  function allView(){
    if(winWidth <= 700){
      mobileView("view");
      pcView("off");
    }else{
      pcView("view");
      mobileView("off");
    }
  }

  function mobileView(on){
    if(on == "view"){
      $("#main_menu>ul>li").on("click",function(){
        if($(this).find(".tgBtn").hasClass("active")){
          $(".sub_menu").stop().slideUp();
          $(".tgBtn").removeClass("active");
          return false;
        }
        $(".sub_menu").stop().slideUp();
        $(this).find(".sub_menu").stop().slideDown();
        $(".tgBtn").removeClass("active");
        $(this).find(".tgBtn").addClass("active");
      })
    }else{
      $("#main_menu>ul>li").off("click");
    }
  }

  function pcView(on){
    if(on == "view"){
      $("#main_menu>ul>li").on("mouseenter",function(){
        $("#headerTop").stop().animate({height:300},200);
        $(".sub_menu").stop().slideDown(400);
        $("#headerTop").addClass("fixed");
      })
      $("#main_menu").on("mouseleave",function(){
        $("#headerTop").stop().animate({height:80},200);
        $(".sub_menu").stop().slideUp(400);
        if(0>scrollY|0==scrollY){
          $("#headerTop").removeClass("fixed");
        }else{
          $("#headerTop").addClass("fixed");
        }
      })
    }else{
      $("#main_menu>ul>li").off("mouseenter");
      $("#main_menu>ul>li").off("mouseleave");
    }
  }







});
