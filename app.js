const form = document.querySelector("form");
const emailInput = document.querySelector("form input");

const createError = (text) => {
  // create the HTML element
  const errorMessage = document.createElement("p");
  // insert data
  errorMessage.textContent = text;
  // add CSS class
  errorMessage.classList.add("error");
  // insert node
  form.insertBefore(errorMessage, document.querySelector("form button"));
  // add CSS error class to the input field
  emailInput.classList.add("error_border");
};

const validateEmail = () => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // if the error exists and the input field is empty or the email is invalid
  if (
    document.querySelector(".error") &&
    (emailInput.value.trim() === "" || !emailInput.value.match(reg))
  ) {
    if (
      emailInput.value.trim() !== "" &&
      document.querySelector(".error").textContent !==
        "Please provide a valid email address"
    ) {
      document.querySelector(".error").textContent =
        "Please provide a valid email address";
    } else if (
      emailInput.value.trim() === "" &&
      document.querySelector(".error").textContent !==
        "Whoops! It looks like you forgot to add your email"
    ) {
      document.querySelector(".error").textContent =
        "Whoops! It looks like you forgot to add your email";
    }
    return;
  }

  // if the input field is empty and the error doesn't exist
  if (emailInput.value.trim() === "" && !document.querySelector(".error")) {
    createError("Whoops! It looks like you forgot to add your email");
    return;
  }

  // if the email is invalid and the error doesn't exist
  if (!emailInput.value.match(reg) && !document.querySelector(".error")) {
    createError("Please provide a valid email address");
  } else if (emailInput.value.match(reg) && document.querySelector(".error")) {
    document.querySelector(".error").remove();
    emailInput.classList.remove("error_border");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});
