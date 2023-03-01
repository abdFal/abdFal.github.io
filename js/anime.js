const toggleButton = document.getElementsByClassName("toggle")[0];
const navbarItems = document.getElementsByClassName("menu");

toggleButton.addEventListener("click", () => {
  for (let i = 0; i, navbarItems.length; i++) {
    navbarItems[i].classList.toggle("active");
  }
});
