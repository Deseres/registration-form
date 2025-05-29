const registrationForm = document.getElementById("registrationForm");
const validationMessage = document.getElementById("validationMessage");

function registerUser(event){
  event.preventDefault()

  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");
  const checkboxTechnology = document.getElementById("Technology");
  const checkboxDesign = document.getElementById("Design");
  const checkboxBusiness = document.getElementById("Business");
  const checkboxOther = document.getElementById("Other");
  const subYes = document.getElementById("subYes");
  const subNo = document.getElementById("subNo");


  if (fullnameInput.value.length <3){
    validationMessage.innerHTML = "Your full name should be at least 3 letters";
    return;
  }

  const age = Number(ageInput.value);
  if (age < 12 || age > 99){
    validationMessage.innerHTML = "select age from 12 to 99";
    return;
  }

  if (!checkboxTechnology.checked && !checkboxDesign.checked && !checkboxBusiness.checked && !checkboxOther.checked){
    validationMessage.innerHTML = "Don't forget about topics that were interesting for you!";
    return;
  }

  if (!subYes.checked && !subNo.checked){
    validationMessage.innerHTML = "Let us know about subscription!";
    return;
  }

  validationMessage.innerHTML = "";
  alert("Thank you for registration");
  registrationForm.reset();
}
