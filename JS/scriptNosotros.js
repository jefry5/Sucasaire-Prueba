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
