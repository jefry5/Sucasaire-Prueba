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

//Animación de DropDownMenu en productos
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdowns => {
    const select = dropdowns.querySelector('.select');
    const caret = dropdowns.querySelector('.caret');
    const menu = dropdowns.querySelector('.menu-texto-imagen-container');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
});

//Animación de Sliders en productos
var swiper = new Swiper(".productos-swiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//Actualización del año en el PIE DE PÁGINA
var yearElement = document.getElementById('year');
var currentYear = new Date().getFullYear();
yearElement.innerHTML = "&copy; " + currentYear + " <b>Sucasaire</b> - Todos los Derechos Reservados.";
