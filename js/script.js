$(function () {
  // 서브메뉴 드롭다운
  $(".sub-menu").each(function (index) {
    $(this).mouseenter(function () {
      $("nav>ul>li>a").removeClass("active");
      $("nav>ul>li>a").eq(index).addClass("active");
    });
    $(this).mouseleave(function () {
      $("nav>ul>li>a").removeClass("active");
    });
  });
  $("nav").mouseenter(function () {
    $(".sub-menu-back").slideDown();
    $(".sub-menu").slideDown();
  });
  $("nav").mouseleave(function () {
    $(".sub-menu-back").slideUp();
    $(".sub-menu").slideUp();
  });
  //   슬라이드
  var count = 0;
  setInterval(function () {
    if (count === 3) {
      count = 0;
    }
    $("#main-slide>ul")
      .stop()
      .animate({
        left: -1200 * count,
      });
    count++;
  }, 3000);

  //   tab구현
  $(".tab-content").hide();
  $(".tab-content").eq(0).show();
  $(".tabs>li>a").click(function () {
    console.log("클릭");
    $(".tab-content").hide();
    $(this.hash).show().css({ display: "flex" });
    $(".tabs>li>a").removeClass("active");
    $(this).addClass("active");
    return false;
  });
  //   팝업 기능 구현
  $("#notic>li>a:first-child").click(function () {
    $("#popup").show();
    return false;
  });
  $(".pop-close").click(function () {
    $("#popup").hide();
  });
});
