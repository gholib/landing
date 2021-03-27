import './scss/index.scss'

const navbar = document.getElementById('navbar')
const mobiNavbar = document.getElementById('navbarSupportedContent')
const navbarToggler = document.getElementById('navbar-toggler')

setBackgroundToNavbar(navbar)

navbarToggler.addEventListener('click', function() {
    toggleMobiNavbar()
})
window.addEventListener('scroll', function() {
    setBackgroundToNavbar(navbar)
})

function setBackgroundToNavbar(navbar) {
    if (pageYOffset > 10) {
        navbar.classList.add('affix')
    }else {
        navbar.classList.remove('affix')
    }
}

function toggleMobiNavbar() {
    mobiNavbar.classList.toggle('show')
}