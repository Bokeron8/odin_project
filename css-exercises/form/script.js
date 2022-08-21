let passwordElement = document.getElementById('password');
let confirmElement = document.getElementById('confirm-password');
let passwordErrorElement = document.querySelector('span.error');
passwordElement.addEventListener('input', (event)=>validatePassword());
confirmElement.addEventListener('input', (event)=>validatePassword());
function validatePassword(){
    let element = event.target
    if (passwordElement.value != confirmElement.value){
        passwordErrorElement.textContent = "Passwords do not match";
        element.setCustomValidity("Passwords do not match");
        element == passwordElement?confirmElement.reportValidity():passwordElement.reportValidity;
        element.reportValidity();
    }
    else{
        passwordErrorElement.textContent = "";
        confirmElement.setCustomValidity('');
        passwordElement.setCustomValidity('');
    }
}