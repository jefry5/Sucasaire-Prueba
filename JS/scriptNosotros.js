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
window.addEventListener('scroll',function(){
    let valorAnimacion1 = this.document.getElementById('valoresAnimado1');
    let valorAnimacion2 = this.document.getElementById('valoresAnimado2');
    let valorAnimacion3 = this.document.getElementById('valoresAnimado3');
    let valorAnimacion4 = this.document.getElementById('valoresAnimado4');

    let posicionObj = valorAnimacion1.getBoundingClientRect().top;
    let tamanoPantalla = window.innerHeight/1.05; //Mientras más bajo la división, más lejos de la imagen funcionara la animación

    if(posicionObj < tamanoPantalla){
        var tiempoAnimacion = 800; //ESTA EN MILISEGUNDOS
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
                }, tiempoAnimacion);
            }, tiempoAnimacion);
        }, tiempoAnimacion);
    }
})
