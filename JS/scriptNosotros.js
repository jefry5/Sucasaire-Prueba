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

//Valores animación 

let valorAnimacion1 = this.document.getElementById('valoresAnimado1');
let valorAnimacion2 = this.document.getElementById('valoresAnimado2');
let valorAnimacion3 = this.document.getElementById('valoresAnimado3');
let valorAnimacion4 = this.document.getElementById('valoresAnimado4');
var tiempoAnimacion = 800; //ESTA EN MILISEGUNDOS
let tamanoPantalla = window.innerHeight/1.05; //Mientras más bajo la división, más lejos de la imagen funcionara la animación

window.addEventListener('scroll',valoresAnimacion);

function valoresAnimacion(){
    let posicionObj = valorAnimacion1.getBoundingClientRect().top;

    if(posicionObj < tamanoPantalla){
        valorAnimacion1.style.visibility = 'visible';
        valorAnimacion1.style.animation = 'valoresDesplazamiento 1.8s ease';
        setInterval(() => {
            valorAnimacion2.style.visibility = 'visible';
            valorAnimacion2.style.animation = 'valoresDesplazamiento 1.8s ease';
            setInterval(() => {
                valorAnimacion3.style.visibility = 'visible';
                valorAnimacion3.style.animation = 'valoresDesplazamiento 1.8s ease';
                setInterval(() => {
                    valorAnimacion4.style.visibility = 'visible';
                    valorAnimacion4.style.animation = 'valoresDesplazamiento 1.8s ease';
                    window.removeEventListener('scroll', valoresAnimacion); // Elimina el evento de Animación
                }, tiempoAnimacion);
            }, tiempoAnimacion);
        }, tiempoAnimacion);
    }
}

//Contador Animación
const color_fondo = document.getElementById('color-fondo');
const numero = document.getElementById('numero');
var switchDetenerContador = false;

window.addEventListener('scroll', ContadorAnimacion);

function ContadorAnimacion() {
    let numeroPosicion = numero.getBoundingClientRect().top;
    if(numeroPosicion < tamanoPantalla && !switchDetenerContador){
        switchDetenerContador = true;
        let cantidad = 0;
        let tiempoContador = setInterval(() => {
            cantidad += 1;    
            if(window.innerWidth<=800){
                color_fondo.style.height = `${cantidad / 4}%`;
            }else{
                color_fondo.style.height = `${cantidad / 2.5}%`;
            }
            numero.textContent = "+" + cantidad;
            if(cantidad == 100){
                clearInterval(tiempoContador);
                window.removeEventListener('scroll', ContadorAnimacion);    // Elimina el evento de Animación
            }
        }, 80);
    }
}

//Actualización del año en el PIE DE PÁGINA
var yearElement = document.getElementById('year');
var currentYear = new Date().getFullYear();
yearElement.innerHTML = "&copy; " + currentYear + " <b>Sucasaire</b> - Todos los Derechos Reservados.";




