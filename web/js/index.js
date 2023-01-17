let body = document.getElementsByClassName('bod');
menuButton.addEventListener('click', () => {
    if (isOpen) {
        body[0].setAttribute("style", "background-image: url('./web/media/fondo_negro.png')")
        menuButton.style.filter = "invert()"
    } else {
        body[0].setAttribute("style", "background-image: url('./web/media/fondo2.jpg')")
        menuButton.style.filter = "none"
    }
});

