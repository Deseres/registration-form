const registrationForm = document.getElementById("registrationForm");
const validationMessage = document.getElementById("validationMessage");

function registerUser(event){
  event.preventDefault()

  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const rateInput = document.getElementById("rate");
  const RecomYes = document.getElementById("RecomYes");
  const RecomNo = document.getElementById("RecomNo");
  const comments = document.getElementById("comments");
  const checkboxInput = document.getElementById("checkbox");

  if (fullnameInput.value.length < 2){
    validationMessage.innerHTML = "Your full name should be at least 2 letters";
    return 
  }

  const rate = Number(rateInput.value);
  if (rate < 1 || rate > 5){
    validationMessage.innerHTML = "rating should be from 1 to 5";
    return 
  }

  if (!RecomYes.checked && !RecomNo.checked){
    validationMessage.innerHTML = "Answear question about recomendation";
    return 
  }

  validationMessage.innerHTML="";
  alert("Thank you for registration");
  registrationForm.reset();




}

