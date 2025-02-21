var root=document.querySelector(':root');

function toggleMenu() {
    // Corregido: selector del botón
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    // Corregido: uso de querySelector
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle("active");
}

function fixPhotoOnScroll() {
    var photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';
}

window.addEventListener('scroll', fixPhotoOnScroll, false);

function showImage(image){
    var newImage=document.createElement('img');
    newImage.src=image.src;
    newImage.removeAttribute('onclick');
        var modal= document.getElementById('preview');
        modal.classList.toggle('showModal');
        var existingImage= modal.querySelector('img');
        if(existingImage)
            {
                modal.removeChild(existingImage);
            }
            modal.appendChild(newImage);
}

function cerrarModal () {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
}


document.querySelector('.menu-circle').addEventListener('click', () => {
    document.querySelector('.js-menu').classList.toggle('active');
});
