const passwordField = document.querySelector(".input-password");
const seeBtn = document.querySelector(".icon-see");
const hideBtn = document.querySelector(".icon-hide");

seeBtn.addEventListener("click", function () {
  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
    seeBtn.classList.toggle("active");
    hideBtn.classList.toggle("active");
  } else {
    passwordField.setAttribute("type", "password");
  }
});

hideBtn.addEventListener("click", function () {
  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
  } else {
    passwordField.setAttribute("type", "password");
    seeBtn.classList.toggle("active");
    hideBtn.classList.toggle("active");
  }
});
