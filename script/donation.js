const s = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  s("#submit").addEventListener("click", submit);
  s("#reset").addEventListener("click", clear);
  s("#back").addEventListener("click", back);
  s("#name").focus();
});

//  --- on submit click ----
const submit = () => {
  const name = s("#name");
  const email = s("#email");
  const accnt = s("#account");
  const cvv = s("#cvv");
  let isValid = true;
  let namepattern = /^[a-zA-Z]{2,30}$/;
  let accountpattern = /^[0-9]{8,8}$/;
  let cvvpattern = /^[0-9]{3,3}$/;

  //   --- validation starts--
  if (name.value == "") {
    name.nextElementSibling.innerHTML = " Please enther the name ";
    isValid = false;
  } else if (!namepattern.test(name.value)) {
    name.nextElementSibling.innerHTML = " Please enther a valid name ";
    isValid = false;
  } else {
    name.nextElementSibling.innerHTML = " ";
  }
  if (email.value == "") {
    email.nextElementSibling.innerHTML = " Please enther the email ";

    isValid = false;
  } else {
    email.nextElementSibling.innerHTML = " ";
  }
  if (cvv.value == "") {
    cvv.nextElementSibling.innerHTML = " Please enther the cvv ";

    isValid = false;
  } else if (!cvvpattern.test(cvv.value)) {
    cvv.nextElementSibling.innerHTML = " Please enther a valid cvv number ";
    isValid = false;
  } else {
    cvv.nextElementSibling.innerHTML = " ";
  }
  if (accnt.value == "") {
    accnt.nextElementSibling.innerHTML = " Please enther the account number ";

    isValid = false;
  } else if (!accountpattern.test(accnt.value)) {
    accnt.nextElementSibling.innerHTML =
      " Please enther a valid account number ";
    isValid = false;
  } else {
    accnt.nextElementSibling.innerHTML = " ";
  }
  // ----validation ends---

  if (isValid) {
    document.getElementById("formcalss").style.display = "none";
    document.getElementById("confirm").style.display = "contents";
    document.getElementById("donationtext").style.display = "none";
    document.getElementById("donatetitle").style.display = "none";
  }
};

///----clear form-----
const clear = () => {
  s("#name").value = null;
  s("#email").value = null;
  s("#account").value = null;
  s("#cvv").value = null;

  s("#name").nextElementSibling.innerHTML = "*";
  s("#email").nextElementSibling.innerHTML = "*";
  s("#account").nextElementSibling.innerHTML = "*";
  s("#cvv").nextElementSibling.innerHTML = "*";
};

const back = () => {
  clear();
  document.getElementById("formcalss").style.display = "block";
  document.getElementById("confirm").style.display = "none";
  document.getElementById("donationtext").style.display = "block";
  document.getElementById("donatetitle").style.display = "block";
};
