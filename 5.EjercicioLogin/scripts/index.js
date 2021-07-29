// Esta es la base de datos de nuestros usuarios

window.onload = () => {
  if (sessionStorage.length !== 0) {
    const sesion = JSON.parse(sessionStorage.getItem("sesion"));
    const correoElectronico = sesion.email;
    paginaBienvenida(correoElectronico); 
  }
}

const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

const form = document.forms.sesion;
const email = form.email;
const password = form.password;
const button = document.querySelector("button");
const loader = document.querySelector("#loader");
const error = document.querySelector("#error-container");
const iniciarSesion = document.querySelector("h1");

const datosSesion = {
  name : null,
  email : null,
  password : null
}

function datosSesionStorage(name, email, password){
  datosSesion.name = name;
  datosSesion.email = email;
  datosSesion.password = password;

  sessionStorage.setItem("sesion", JSON.stringify(datosSesion));
}

function validarEmail(email){
  const expresion = /[A-z]+@[A-z]+.[A-z]{3}/;
  const test = expresion.test(email);
  return test;
}

function validarContrasenia(password){
  return password.length>=5;
}

function validarUsuario(email,password){
  const arrayEmail = baseDeDatos.usuarios.map(usuario => usuario.email);
  const arrayEmailPassword = baseDeDatos.usuarios.map(usuario => usuario.password);
  return arrayEmail.includes(email) && arrayEmailPassword.includes(password);
}

function obtenerNombre(email){
  const user = baseDeDatos.usuarios.find(usuario => usuario.email == email);
  return user.name;
}

function cartelBienvenida(email){
  const usuario = obtenerNombre(email);
  form.style.opacity = 0;
  iniciarSesion.innerHTML = `<h1> Bienvenido al sitio ${usuario} 😀</h1>`;
  cerrarSesion();
  const logOutButton = document.querySelector("#logout-btn");
  logOutButton.onclick = () => { sessionStorage.clear(); alert("Ha cerrado sesión"); location.reload() }
}

function cerrarSesion(){
  const container = document.querySelector("#logout");
  const template = `<button id="logout-btn" class="logout-btn">Cerrar Sesión</button>`;
  container.innerHTML += template;
}

function validar(){
  const emailValido = validarEmail(email.value);
  const contrasenia = validarContrasenia(password.value);
  const usuarioEnBase = validarUsuario(email.value, password.value);
  const nombreUsuario = obtenerNombre(email.value);

  if ( emailValido && contrasenia && usuarioEnBase){
    cartelBienvenida(email.value);
    datosSesion(nombreUsuario,email.value,password.value);
  }else{
    error.innerHTML = '<small>Alguno de los datos ingresados son incorrectos</small>';
    loader.classList.add("hidden");
    error.classList.remove("hidden");
  }
}

button.onclick = () => {
  loader.classList.remove("hidden");
  setTimeout(() => {
    validar();
  }, 3000);
}

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */