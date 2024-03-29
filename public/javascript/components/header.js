// naviagation responsive open

let pages = document.querySelector('#pages');
let menubtn = document.querySelector('#social i');
// let menubar = document.querySelector('.fa-ellipsis-vertical');


menubtn.addEventListener('click', () => {
    pages.classList.toggle('sidebar-slide');
    menubtn.classList.toggle("fa-xmark");
    document.body.classList.toggle('overflow-hidden-navigation')

})

// naviagation responsive close


// subnaviagation responsive

let pagesubmenu = document.querySelector('.pages-submenu')
let pagesoption = document.querySelector('#pages-navbar')

let packageSubmenu = document.querySelector('.packages-submenu');
let packages = document.querySelector('#packages')

pagesoption.addEventListener('click', () => {
    pagesubmenu.classList.toggle('submenu-open');
})
packages.addEventListener('click', () => {
    packageSubmenu.classList.toggle('submenu-open');
})

// subnaviagation responsive close

