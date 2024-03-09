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

//Animación de Expansión y Contracción de los productos

const productos = [
    document.getElementById('slide-1'),
    document.getElementById('slide-2'),
    document.getElementById('slide-3'),
    document.getElementById('slide-4'),
    document.getElementById('slide-5')
];
const estadoProductos = {
    slide_1: false,
    slide_2: false,
    slide_3: false,
    slide_4: false,
    slide_5: false
};

function expandirAnimacion(elemento){
    elemento.style.animation = 'crecimientoBox 0.5s ease forwards';
}
function contraerAnimacion(elemento){
    elemento.style.animation = 'contraerBox 0.15s ease forwards';
}
function expandirConClick(elemento) {
    if(!estadoProductos[elemento.id]) { //PRIMER CLICK
        mantenerEstadoDeExpancion(elemento);
        OtrosElementosDeProductos(elemento);
        estadoProductos[elemento.id] = true;
    }else{ //CLICK DE RETORNO
        contraerAnimacion(elemento);
        RestaurarOpacidad();
        estadoProductos[elemento.id] = false;
    }
}
function OtrosElementosDeProductos(elemento){
    var opacidadDeElementos = 0.35;
    for(let i=0; i<productos.length; i++){
        if(productos[i].id != elemento.id){
            productos[i].style.opacity = opacidadDeElementos;
        }
    }
}
function mantenerEstadoDeExpancion(elemento){
    expandirAnimacion(elemento);
}
function RestaurarOpacidad(){
    for(let i=0; i<productos.length; i++){
        productos[i].style.opacity = 1;
    }
}

//Actualización del año en el PIE DE PÁGINA
var yearElement = document.getElementById('year');
var currentYear = new Date().getFullYear();
yearElement.innerHTML = "&copy; " + currentYear + " <b>Sucasaire</b> - Todos los Derechos Reservados.";
