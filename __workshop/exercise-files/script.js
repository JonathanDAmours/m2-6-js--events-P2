const formE = document.querySelector("#form");
const nameE = document.querySelector("#fullname");
const addressE = document.querySelector("#street");
const emailE = document.querySelector("#email");
const phoneE = document.querySelector("#phone");
const passwordE = document.querySelector("#password");
const confirmPassE = document.querySelector("#confirm");
const termsE = document.querySelector("#agree");
const errorMessageE = document.querySelector("#errormessage");

function formSubmit(ev) {
  ev.preventDefault();
  cleanUpForm();

  let password = passwordE.value;
  let confirmPass = confirmPassE.value;
  let agreedToTerms = termsE.checked;

  if (!agreedToTerms) {
    window.alert("You must agree to the terms before continuing");
    return;
  }

  let errorField;
  let errorMessage;

  if (password.length < 10) {
    errorField = passwordE;
    errorMessage =
      "Your password is too short! \n Please provide a password that is at least 10 characters long.";
  } else if (password !== confirmPass) {
    errorField = confirmPassE;
    errorMessage =
      "Your passwords didn't match! \n Please provide the same password in each field.";
  }

  if (errorMessage && errorField) {
    errorMessageE.style.display = "block";
    errorMessageE.innerText = errorMessage;
    errorField.classList.add("error-field");
    errorField.focus();
    return;
  }

  alert("Success!");
}

function cleanUpForm() {
  passwordE.classList.remove("error-field");
  confirmPassE.classList.remove("error-field");
  errorMessageE.style.display = "none";
}

formE.addEventListener("submit", handleSubmit);
