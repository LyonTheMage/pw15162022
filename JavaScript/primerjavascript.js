function quitarSITEC(){
    //let pregunta = confirm("seguro de quitar SITEC")
    if(confirm("seguro de quitar SITEC")){
        alert("SITEC Borrado... :(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "chale borrado";
    }
}


function funcionAlerta(){
    alert("di clic")
}



//alert("alerta en archivo extreno javascript");