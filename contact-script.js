$(document).ready(function () {

    // navbar
    // Select the hamburger menu and the navbar widget
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarWidget = document.querySelector('.navbar-widget-small');
    
    // Add a click event to toggle the navbar visibility
    hamburgerMenu.addEventListener('click', () => {
        navbarWidget.classList.toggle('show');
    });
    

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});





});