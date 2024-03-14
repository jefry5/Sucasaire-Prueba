var header = document.getElementById('Header');
var switchHeader = 1;
var switchHeaderBool = false;

window.addEventListener('scroll',()=>{
    var scroll = window.scrollY

    if (scroll>10){
        header.classList.add('fade-in-out')
        switchHeaderBool = true;
        setTimeout(header.style.backgroundColor = '#121212',300);
    }else{
        header.classList.remove('fade-in-out');
        switchHeaderBool = false;
        setTimeout(header.style.backgroundColor = 'transparent',300);
    }
})
function colorNegroHeader(){
    if(switchHeader == 1){
        switchHeader = 0;
        header.style.backgroundColor = '#121212';
    }else{
        switchHeader = 1;
        if(!switchHeaderBool){
            header.style.backgroundColor = 'transparent';
        }
    }
}

//INPUTS CONDICIONES
const nombre = document.getElementById("name");
const telefono = document.getElementById("phone");
const errorMensajeNumero = document.getElementById("error-message-numeros");
const errorMensajeTexto = document.getElementById("error-message-letras");

nombre.addEventListener("input", function(event) {
    errorMensajeNumero.style.display = "none";

    let input = event.target;
    let value = input.value;
    if (/\d/.test(value)) {
        errorMensajeTexto.style.display = "block";
    } else {
        errorMensajeTexto.style.display = "none";
    }
    input.value = value.replace(/\d/g, "");
});

telefono.addEventListener("input", function(event) {
    errorMensajeTexto.style.display = "none";

    let input = event.target;
    let value = input.value;
    if (/\D/.test(value)) {
        errorMensajeNumero.style.display = "block";
    } else {
        errorMensajeNumero.style.display = "none";
    }
    input.value = value.replace(/\D/g, "");
});


//Actualización del año en el PIE DE PÁGINA
var yearElement = document.getElementById('year');
var currentYear = new Date().getFullYear();
yearElement.innerHTML = "&copy; " + currentYear + " <b>Sucasaire</b> - Todos los Derechos Reservados.";