const form = document.querySelector("form");
const emailInput = document.querySelector("form input");

const createError = () => {
  const errorMessage = document.createElement("p");

  errorMessage.textContent = "Please provide a valid email address";

  errorMessage.classList.add("error");

  form.insertBefore(errorMessage, document.querySelector("form button"));

  emailInput.classList.add("error_border");
};

const validateEmail = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailInput.value.match(reg) && !document.querySelector(".error")) {
    createError();
  } else if (emailInput.value.match(reg) && document.querySelector(".error")) {
    document.querySelector(".error").remove();
    emailInput.classList.remove("error_border");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});
