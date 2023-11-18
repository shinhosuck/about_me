
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

// INDEX PAGE, MESSAGE RECEIVED CONTAINER 

const messageReceivedContainer = document.querySelector('.message-received-container')
const messageReceivedCloseBtn = document.querySelector('.message-received-close-btn')

if(messageReceivedContainer) {

    const id1 = setTimeout(() => {
        messageReceivedCloseBtn.style.opacity = '1'
        clearTimeout(id1)
    }, 2000);

    const id2 = setTimeout(() => {
        messageReceivedContainer.style.display = 'none'
        clearTimeout(id2)
    }, 10000);
}

messageReceivedCloseBtn.addEventListener('click', (e) => {
    messageReceivedContainer.style.display = 'none'
})