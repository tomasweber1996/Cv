const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
let isOpen = false;
menuButton.addEventListener('click', () => {
    if (isOpen) {
        menuButton.style.transform = `rotate(${0}deg)`
        menu.style.transform = "translateX(-100%)";
    } else {
        menuButton.style.transform = `rotate(${90}deg)`
        menu.style.transform = "translateX(0%)";
    }
    isOpen = !isOpen;
  
});