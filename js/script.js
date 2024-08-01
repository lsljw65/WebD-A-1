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

  //   tab구현
  $(".tab-content").hide();
  $(".tab-content").eq(0).show();
});
