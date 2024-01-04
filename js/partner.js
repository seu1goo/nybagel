if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

(function () {
  emailjs.init("sSWbQIkK66xHrKRKN");
})();

window.onload = function () {
  document
    .getElementById("contact-form-p")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      $("#loading").show();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_0swpzss", "contact_partner", this).then(
        function () {
          alert("제안이 접수 되었습니다.");
          $("#loading").hide();
        },
        function (error) {
          alert("제안이 실패했습니다. 다시 시도해주세요.");
          $("#loading").hide();
        }
      );
    });
};
// mail
