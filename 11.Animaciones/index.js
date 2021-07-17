const tiempoDeCarga = 5000;

function animarBarra(){
    let elem = document.getElementById("barra");

    let width = 0;

    const progresoSobreTiempoTotal = tiempoDeCarga / 100;

    let id = setInterval(incrementarProgreso, progresoSobreTiempoTotal);

    function incrementarProgreso(){
        if (width >=100){
            clearInterval(id);
        }else{
            width++;

        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        }
    }
}

document.querySelector("#iniciar-carga").addEventListener("click", animarBarra);