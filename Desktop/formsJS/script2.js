const registrationForm = document.getElementById("registrationForm");
const validationMessage = document.getElementById("validationMessage");

function registerUser(event){
  event.preventDefault();

  const fullnameInput =document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const titleSelect = document.getElementById("title");
  const arrivalInput = document.getElementById("arrival");
  const checkboxInput = document.getElementById("terms");

  if (fullnameInput.value.length < 3){
    validationMessage.innerHTML = "Your name should be at least 3 characters";
    return;
  }

  if (phoneInput.value.length != 10){
    validationMessage.innerHTML = "Your phone should have 10 digits";
    return;
  }

  validationMessage.innerHTML="";
  alert("Thank you for the registration");
  registrationForm.reset();







}