function mostrarMenu(itemID) {
    let menu = document.getElementById(itemID)
    if( getComputedStyle(menu).display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none'
    }
}
function esconderMenu(itemID) {
    let menu = document.getElementById(itemID);
    if( getComputedStyle(menu).display == 'block') {
    menu.style.display = 'none'
    }
}