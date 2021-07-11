window.onload = () => {
    cargarImagen();
    
    document.querySelector('#random').addEventListener('click', () => {
        cargarImagen();
    })
}

function cargarImagen(){
    const peticion = fetch('https://dog.ceo/api/breeds/image/random');
    
    peticion.then( response => {
        return response.json();
    }).then( data => {
        console.log(data);

        const img = document.querySelector('#dog-img');
        img.setAttribute('src', data.message);
    })
}