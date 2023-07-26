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

// scrollup-btn
window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var clientHeight = 2000;
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition >= clientHeight) {
    document.querySelector(".scroll-up-button").style.display = "block";
  } else {
    document.querySelector(".scroll-up-button").style.display = "none";
  }
});

// Fungsi untuk me-redirect ke halaman atas ketika tombol scroll up di klik
document
  .querySelector(".scroll-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
