// Preloader
window.addEventListener("load", function () {
  var preloader = document.querySelector(".center-body");
  preloader.style.display = "none";
});

// Sticky navbar
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});
