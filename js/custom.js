function checkEmail(e){
  if (this.validity.valid){
    emailError.innerHTML = '';
    emailError.className = 'error';
  } else{
    showError();
  }
}

function validateAll(e){
  if (!email.validity.valid){
    showError();
    e.preventDefault();
  }
}

function showError(){
  if (email.validity.valueMissing){
    emailError.textContent = "You need to enter an email address";
  } else if(email.validity.typeMismatch){
    emailError.textContent = "Entered value needs to eb an email address.";
  } else if (email.validity.tooShort){
    emailError.textContent = `Email should be at least ${email.minLength} charechters; you've entered ${email.value.length}`;
  }

  email.className = 'error active';
}

const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const emailError = document.querySelector(".error");

// console.log(email);

email.addEventListener('input', checkEmail);

form.addEventListener('submit', validateAll);
