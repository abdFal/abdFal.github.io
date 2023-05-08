function kirim() {
  event.preventDefault();

  var fromName = document.getElementsByName("from_name")[0].value;
  var fromEmail = document.getElementsByName("from_email")[0].value;
  var templateParams = {
    to_name: "Nofal",
    from_name: fromName,
    from_email: document.getElementsByName("from_email")[0].value,
    subject: document.getElementsByName("subject")[0].value,
    message: document.getElementsByName("message")[0].value,
  };

  emailjs.send("service_zeq128b", "template_kle8yus", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      window.location.href = "index.html";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

// carousel
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    padding: "1.6rem",
    focus: "center",
  });

  splide.mount();
});
