if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

AOS.init();
// aos

$(function () {
  $(document).on("mouseover", ".nav > li", function () {
    $(this).find(".sub").show();
  });

  $(document).on("mouseout", ".nav > li", function () {
    $(this).find(".sub").hide();
  });

  $(document).on("click", ".mobMenu", function () {
    $(".mobNavBg").fadeIn(100);
    $(".navMenu").addClass("on");
  });

  $(document).on("click", ".mobNavBg", function () {
    $(".mobNavBg").fadeOut(100);
    $(".navMenu").removeClass("on");
  });
});
// header

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
// footer
