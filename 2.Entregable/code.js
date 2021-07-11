let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  
  datosPersona.nombre = prompt('Ingresa tu nombre');
  datosPersona.edad = 2021 - parseInt(prompt('Ingresa el año en que naciste'));
  datosPersona.ciudad = prompt('Ingresa la ciudad donde vives');
  datosPersona.interesPorJs = confirm('Te interesa Javascript?') ? 'Si' : 'No';

  return datosPersona;
}



function renderizarDatosUsuario() {
  
  obtenerDatosDelUsuario();
  
  document.querySelector('#nombre').appendChild(document.createTextNode(datosPersona.nombre));
  document.querySelector('#edad').appendChild(document.createTextNode(datosPersona.edad));
  document.querySelector('#ciudad').appendChild(document.createTextNode(datosPersona.ciudad));
  document.querySelector('#javascript').appendChild(document.createTextNode(datosPersona.interesPorJs));
}

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  const contenedorTarjetas = document.getElementById('fila');
  
  listado.forEach( lista => {
    const template = `
    <article class="caja">
      <img src="${lista.imgUrl}" alt="${lista.lenguajes}>
      <p class="lenguajes">Lenguajes: ${lista.lenguajes}</p>
      <p class="bimestre">Bimestre: ${lista.bimestre}</p>
    </article>
    `;
    contenedorTarjetas.innerHTML += template;
  })
}

function mostrarYOcultarDescripcionCompleta() {

  const completo = document.querySelector('.sobre-mi');
  return completo.classList.toggle('sobre-mi-completo');

}


function recorrerListadoYRenderizarTarjetas() {
  const contenedor = document.getElementById('fila');
  
  listado.forEach( lenguaje => {
    const template = `
    <article class="caja">
      <img src="${lenguaje.imgUrl}" alt="${lenguaje.lenguajes}>
      <p class="lenguajes">Lenguajes: ${lenguaje.lenguajes}</p>
      <p class="bimestre">Bimestre: ${lenguaje.bimestre}</p>
    </article>
    `;
    contenedor.innerHTML += template;
  })
}