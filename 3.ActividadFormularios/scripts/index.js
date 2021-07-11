const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {

  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  // 2. Obtenemos los datos ingresados en el input de password
  // 3. Obtenemos el valor del input radio
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.

  usuarioNuevo();
  
});
const userEmail = document.getElementById('email-input').value;
const userPassword = document.getElementById('password-input').value;
const userAge = document.getElementsByName('legalAge');
const tryAccepted = document.getElementById('tyc-input');

function esMayorEdad(){
  let legalAge;
  userAge.forEach(element => {
    if (element.id == "age_no" && element.checked) {
      legalAge = false;
      alert('Debes ser mayor de edad para registrarte en el sitio');
    }else{
      legalAge = true;
    };
  });
  return legalAge;
}

function validacionTerminos(){
  let checkTerminos;
  if(tryAccepted.checked){
    checkTerminos = true;
  }else{
    alert('Debes aceptar los TyCs para registrarte en el sitio');
    checkTerminos = false;
  }
  return checkTerminos;
}

function UsuarioCorrecto(userEmail, userPassword){
  this.email = userEmail;
  this.password = userPassword;
  this.legalAge = esMayorEdad();
  this.tryAccepted = validacionTerminos();
}

function usuarioNuevo(){
  const user = new UsuarioCorrecto(userEmail, userPassword)
  console.log(user);
}