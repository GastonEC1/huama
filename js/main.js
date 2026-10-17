const modal = document.getElementById('modal-mascota')
const botonAbrir = document.getElementById('abrir-mascota')

botonAbrir.addEventListener('click', ()=>{
    modal.showModal();
});

modal.addEventListener('click',(evento) =>{
    if(evento.target ===modal)ñ
    modal.close();
})