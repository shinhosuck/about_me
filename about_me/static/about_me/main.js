
// MOBILE NAVIGATION BAR

const body = document.querySelector('body')
const toggleBarsBtn = document.querySelector('.toggle-bars-btn')
const toggleTimesBtn = document.querySelector('.toggle-times-btn')
const navLinks = document.querySelector('.nav-links')


if(toggleBarsBtn && toggleTimesBtn) {

    const handleNavToggleBtnsEvents = (e) => {

        if(e.currentTarget === toggleBarsBtn) {
            navLinks.classList.toggle('show-nav-links')
            body.style.overflow = 'hidden'
            toggleTimesBtn.style.display = 'block'
            toggleBarsBtn.style.display = 'none'
        }
        else if(e.currentTarget === toggleTimesBtn) {
            navLinks.classList.remove('show-nav-links')
            body.style.overflow = 'visible'
            toggleBarsBtn.style.display = 'block'
            toggleTimesBtn.style.display = 'none'
        }
        else if(e.target === window) {
            navLinks.classList.remove('show-nav-links')
            body.style.overflow = 'visible'
            toggleBarsBtn.style.display = 'block'
            toggleTimesBtn.style.display = 'none'
        }
    }

    toggleBarsBtn.addEventListener('click', handleNavToggleBtnsEvents)
    toggleTimesBtn.addEventListener('click', handleNavToggleBtnsEvents)
    window.addEventListener('resize', handleNavToggleBtnsEvents)
}

// END MOBILE NAVIGATION BAR