function mostrarMenu() {
    let menu = document.getElementById('menu')

    if(getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
   
    }
}

function mostrarSubmenu() {
    let menu = document.getElementById('submenu')

    if(getComputedStyle(menu).display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
   
    }
}