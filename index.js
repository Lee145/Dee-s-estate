const mainMenu = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style. right = '0';
}

function close(){
    mainMenu.style. right = '-100%';
}


