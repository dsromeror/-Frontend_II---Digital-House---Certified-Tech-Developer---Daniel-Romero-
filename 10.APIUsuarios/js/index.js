// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
window.addEventListener("load", () => {
    document.querySelector('#random').addEventListener('click', () => {
        agregarDatos();
    })
})

function agregarDatos(){
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            //manipulamos la respuesta
            renderizarDatosUsuario(data);
        });
}

function renderizarDatosUsuario(data) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    const foto = data.results[0].picture.large;
    const arrayNombre = [data.results[0].name.title, data.results[0].name.first, data.results[0].name.last];
    const nombreCompleto = arrayNombre.join(' ');
    const mail = data.results[0].email;

    crearTarjeta(foto, nombreCompleto, mail);
    
}

function crearTarjeta (img, nombre, email){
    const divTarjeta = document.querySelector(".tarjeta");
    const template = `
        <img src="${img}" alt="Foto de perfil">
        <p>Nombre completo: ${nombre}</p>
        <p>Email: ${email}</p>
    `
    divTarjeta.innerHTML = template;
}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.