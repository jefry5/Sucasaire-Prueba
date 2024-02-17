var header = document.getElementById('Header');
var timeout;

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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
    resetearTiempo();
}

function currentSlide(n){
    showSlides(slideIndex = n);
    resetearTiempo();
}

function resetearTiempo(){
    clearTimeout(timeout);
    timeout = setTimeout(autoShowSlides, 5000);
}

function showSlides(n){
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    autoSlideIndex = slideIndex;
}

//Auto slide
var autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides(){
    var slides = document.getElementsByClassName("mySlides");
    for (var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if(autoSlideIndex > slides.length){
        autoSlideIndex = 1;
    }
    slides[autoSlideIndex - 1 ].style.display = "block";
    timeout = setTimeout(autoShowSlides,5000);//Cambia cada 5 segundos 
}

//Animación de transición-Servicios ; ARREGLAR PARA CELULAR

if(window.innerWidth <= 991){
    document.addEventListener("DOMContentLoaded", function () {
        const listaServicioEspacio = document.getElementById("lista-servicio-espacio");
    
        function deslizarLista() {
            const primerElemento = listaServicioEspacio.querySelector("li:first-child");
            listaServicioEspacio.appendChild(primerElemento);
        }
        setInterval(deslizarLista, 5000); // Tiempo de ejecución
    });   
}



//ESPACIO DE BLOG SLIDER SWIPPER ***FALTA ARREGLAR***
var swiper = new Swiper(".slide-content-blog", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
