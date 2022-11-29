const s = (selector) => document.querySelector(selector);

const processEntries = () => {

  //regular expression for validation of name and email address
  let namepattern = /^[a-zA-z]{1,30}$/;
  let emailpattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // get form controls to check for validity
  const fname = s("#fname");
  const lname = s("#lname");
  const email = s("#email");

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
    alert('Thankyou. We have received your message. We will get back to you shortly.');
  }
};

const resetForm = () => {
  s("form").reset();
  s("#fname").nextElementSibling.textContent = "*";
  s("#lname").nextElementSibling.textContent = "*";
  s("#email").nextElementSibling.textContent = "*";
  s("#comments").nextElementSibling.textContent = "*";
  s("#fname").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  s("#submit").addEventListener("click", processEntries);
  s("#reset_form").addEventListener("click", resetForm);
  s("#fname").focus();
});
