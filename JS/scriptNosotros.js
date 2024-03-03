var header = document.getElementById('Header');


window.addEventListener('scroll',()=>{
    var scroll = window.scrollY

    if (scroll>10){
        header.classList.add('fade-in-out')
        setTimeout(header.style.backgroundColor = '#121212',300);
    }else{
        header.classList.remove('fade-in-out');
        setTimeout(header.style.backgroundColor = 'transparent',300);
    }
})

//Valores animación FALTA ARREGLAR


window.addEventListener('scroll',()=>{
    var valoresAnimation = document.querySelector('nosotros-valores-container');
    var scrollValor = window.scrollY

    if (scrollValor > 30 ) {
        valoresContainer.classList.add('activar-animacion');
    } else {
        valoresContainer.classList.remove('activar-animacion');
    }
})
