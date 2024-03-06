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

const producto_1 = document.getElementById('producto-texto-1');
const producto_2 = document.getElementById('producto-texto-2');
const producto_3 = document.getElementById('producto-texto-3');

function expandirAnimacion(elemento){
    elemento.style.animation = 'crecimientoBox 0.5s ease forwards';
    desparecerOtrosProductos(elemento.id);
}
function contraerAnimacion(elemento){
    elemento.style.animation = 'contraerBox 0.5s ease forwards';
    aparecerOtrosProducto();
}
function expandirConClick(elemento) {
    if(elemento.id == producto_1.id){
        producto_1.style.backgroundColor = '#cecece';
    }else if(elemento.id == producto_2.id){
        producto_2.style.backgroundColor = '#cecece';
    }else{
        producto_3.style.backgroundColor = '#cecece';
    }
}
function desparecerOtrosProductos(producto){
    if(producto == producto_1.id){
        producto_2.style.opacity = '0.3';
        producto_3.style.opacity = '0.3';
    }else if(producto == producto_2.id){
        producto_1.style.opacity = '0.3';
        producto_3.style.opacity = '0.3';
    }else{
        producto_1.style.opacity = '0.3';
        producto_2.style.opacity = '0.3';
    }
}
function aparecerOtrosProducto(){
    producto_1.style.opacity = '1';
    producto_2.style.opacity = '1';
    producto_3.style.opacity = '1';
}



//Actualización del año en el PIE DE PÁGINA
var yearElement = document.getElementById('year');
var currentYear = new Date().getFullYear();
yearElement.innerHTML = "&copy; " + currentYear + " <b>Sucasaire</b> - Todos los Derechos Reservados.";
