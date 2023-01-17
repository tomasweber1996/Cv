function showFullscreen() {
    var fullscreen = document.getElementById("fullscreen");
    fullscreen.style.display = "flex";
  }

  function hideFullscreen() {
    var fullscreen = document.getElementById("fullscreen");
    fullscreen.style.display = "none";
  }

  function show(image){
    document.getElementById("scrsht-large").src = image.src
    showFullscreen();
}

function escpressed(e){
    if (e.keyCode === 27) {
        hideFullscreen();
    }
}
document.addEventListener('keydown', escpressed, false)

let full = document.getElementsByClassName('body');
let titulo = document.getElementsByClassName('titulo');
menuButton.addEventListener('click', () => {
    if (isOpen) {
      full[0].setAttribute("style", "background-image: url(../../media/fondo_negro.png);")
      titulo[0].setAttribute("style", "color: black")
      
    } else {
      full[0].setAttribute("style", "background-image: url('./media/fondo.jpg');")
      titulo[0].setAttribute("style", "color: white")
    }
});