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

function changeLink(id, link1, link2) {
    let linkChange = document.getElementById(id)
    if( linkChange.href = link1) {
        linkChange.href = link2
    }
}