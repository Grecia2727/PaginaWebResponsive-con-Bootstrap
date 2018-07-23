//const emailButton = document.getElementById('emailButton');
const faceButton = document.getElementById('faceButton');
const googleButton = document.getElementById('googleButton');
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('loginButton');
const formInicio = document.getElementById('formInicio');
const formRegister = document.getElementById('formRegister');
//const formSesion = document.getElementById('formSesion');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const optionEmail = document.getElementById('optionEmail');
const registerLink = document.getElementById('optionR');
const sButton = document.getElementById('optionS');

formInicio.classList.remove('hidden');
//optionEmail.classList.add('hidden');
formRegister.classList.add('hidden');
// formSesion.classList.add('hidden');

registerLink.addEventListener('click', () => {
  formInicio.classList.add('hidden');
  formRegister.classList.remove('hidden');
})

// registerLink.addEventListener('click', () => {
//   formRegister.classList.remove('hidden');
//   optionEmail.classList.add('hidden');
// })

// sButton.addEventListener('click', () => {
//   formSesion.classList.remove('hidden');
//   optionEmail.classList.add('hidden');
// })

registerButton.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  if (email == ''){
    errorEmail.textContent = "Ingrese Correo";
    errorPassword.textContent = "IngresePassword";
  }else {
    registerNew(email, password);
    
    alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión')
    console.log(email);
    console.log(password);
    
    formRegister.classList.add('hidden');
    formInicio.classList.remove('hidden');  
  }  
});

loginButton.addEventListener('click', () => {
  let email2 = document.getElementById('email2').value;
  let password2 = document.getElementById('password2').value;
  login(email2, password2);
  validation();
});

googleButton.addEventListener('click', (e) => {
  if (e.target) {
    loginGoogle();
  }
});

faceButton.addEventListener('click', (e) => {
  if (e.target) {
    loginFacebook()
  }
});
