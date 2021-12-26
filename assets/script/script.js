let buttonNav = document.getElementById('buttonNav');
let navbarNav = document.getElementById('navbarNav');
let headerMobile = document.getElementById('headerMobile')
if (buttonNav) {
    buttonNav.addEventListener('click', e => {
        navbarNav.classList.toggle('sidebar-toggle')
    })
}
if(headerMobile){
    addEventListener('scroll', e => {
        if (scrollY >= 10) {
            headerMobile.classList.add('fixed-header')
        } else {
            headerMobile.classList.remove('fixed-header')
        }
    })
}