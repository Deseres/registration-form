const registrationForm = document.getElementById("registrationForm");
const validationMessage = document.getElementById("validationMessage");

function registerUser(event) {
  event.preventDefault();

  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const roleSelect = document.getElementById("role");
  const passwordInput = document.getElementById("password");
  const acceptCheckbox = document.getElementById("checkbox");
  const selectedRole = roleSelect.value;

  if (fullnameInput.value.length < 3){
    validationMessage.innerHTML = "Your full name should contain more than one letter";
    return;
  }

  if(passwordInput.value.length < 6){
    validationMessage.innerHTML = "Your password should contain more than 8 characters";
    return;
  }

  if(phoneInput.value.length != 10){
    validationMessage.innerHTML = "Your phone number should 10 digits";
    return;
  }

  validationMessage.innerHTML = "";
  alert("thank you for registration")
  registrationForm.reset();




}