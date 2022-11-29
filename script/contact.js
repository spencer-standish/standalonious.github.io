const $ = (selector) => document.querySelector(selector);

let namepattern = /^[a-zA-z]$/;
let emailpattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const processEntries = () => {
  // get form controls to check for validity
  const fname = $("#fname");
  const lname = $("#lname");
  const email = $("#email");

  // check user entries for validity
  let isValid = true;
  if (fname.value == "") {
    fname.nextElementSibling.textContent = "This field is required.";
    isValid = false;
  } else if (!namepattern.test(fname.value)) {
    fname.nextElementSibling.textContent =
      "Please enter firstname with letters only.";
    isValid = false;
  } else {
    fname.nextElementSibling.textContent = "";
  }

  if (lname.value == "") {
    lname.nextElementSibling.textContent = "This field is required.";
    isValid = false;
  } else if (!namepattern.test(lname.value)) {
    lname.nextElementSibling.textContent =
      "Please enter lastname with letters only.";
    isValid = false;
  } else {
    lname.nextElementSibling.textContent = "";
  }

  if (email.value == "") {
    email.nextElementSibling.textContent = "This field is required.";
    isValid = false;
  } else if (!emailpattern.test(email.value)) {
    email.nextElementSibling.textContent =
      "Please enter a valid email address.";
    isValid = false;
  } else {
    email.nextElementSibling.textContent = "";
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    $("form").submit();
  }
};

const resetForm = () => {
  $("form").reset();
  $("#fname").nextElementSibling.textContent = "*";
  $("#lname").nextElementSibling.textContent = "*";
  $("#email").nextElementSibling.textContent = "*";
  $("#comments").nextElementSibling.textContent = "*";
  $("#fname").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#submit").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);
  $("#fname").focus();
});
