const modal = document.getElementById('modal-mascota')
const botonAbrir = document.getElementById('abrir-mascota')

botonAbrir.addEventListener('click', ()=>{
    modal.showModal();
});

modal.addEventListener('click',(evento) =>{
    if(evento.target ===modal)ñ
    modal.close();
})

const menuBoton = document.querySelector('.menu-boton')
const menu = document.getElementById('menu')

menuBoton.addEventListener('click', () =>{
    const abierto = menu.classList.toggle('nav--abierta')
    menuBoton.setAttribute('aria-expanded',abierto)
})

menu.querySelectorAll('a').forEach((link) =>{
    link.addEventListener('click', () =>{
        menu.classList.remove('nav--abierta')
        menuBoton.setAttribute('aria-expanded','false')
    })
})