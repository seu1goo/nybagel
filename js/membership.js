if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

$(function () {
  $("#memBtn li").each(function () {
    var memBtn = $(this);
    var memList = $("#memList > section");

    memList.eq(0).siblings().hide();
    memBtn.click(function (e) {
      e.preventDefault();

      var target = $(this);
      var index = target.index();

      memList.eq(index).css({
        display: "block",
      });
      memList.eq(index).siblings().css({
        display: "none",
      });

      target.addClass("on");
      target.siblings().removeClass("on");
    });
  });
});

(function () {
  emailjs.init("sSWbQIkK66xHrKRKN");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      $("#loading").show();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_0swpzss", "contact_basic", this).then(
        function () {
          alert("협력사 상담이 접수 되었습니다.");
          $("#loading").hide();
        },
        function (error) {
          alert("협력사 상담 요청이 실패했습니다. 다시 시도해주세요.");
          $("#loading").hide();
        }
      );
    });
};
// mail
