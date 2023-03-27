// Preloader
window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  preloader.classList.add("hide-preloader");
});

document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.querySelector(".preloader");
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
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Programmer", "Manager", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Programmer", "Manager", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
