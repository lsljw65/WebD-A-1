$(function () {
  // 서브 메뉴
  $(".sub-menu").each(function (index) {
    $(this).mouseenter(function () {
      $("nav>ul>li>a").removeClass("active");
      $("nav>ul>li>a").eq(index).addClass("active");
    });
    $(this).mouseleave(function () {
      $("nav>ul>li>a").removeClass("active");
    });
  });
  $("nav").mouseleave(function () {
    $(".sub-menu-back").stop().slideUp();
    $(".sub-menu").stop().slideUp();
  });
  $("nav").mouseenter(function () {
    $(".sub-menu-back").stop().slideDown();
    $(".sub-menu").stop().slideDown();
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
});
