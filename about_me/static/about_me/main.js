
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


// Index.html, MESSAGE RECEIVED CONTAINER 
const messageReceivedContainer = document.querySelector('.message-received-container')
const messageReceivedCloseBtn = document.querySelector('.message-received-close-btn')

// Submit contact form
const messageForm = document.querySelector('.message-form')
const submitBtn = document.querySelector('.contact-submit')
const messageContent = document.querySelector('.received-message')

// Click event on close modal button 
messageReceivedCloseBtn.addEventListener('click', (e) => {
    messageReceivedContainer.classList.remove('drop-message')
})

// Show message sent or failed comfirmation modal (4)
function showSentMessage(message) {
    const data = message.message || message.error
    messageContent.textContent = data
    messageReceivedContainer.classList.add('drop-message')
    window.scrollTo({top:0, left:0, behavior:'smooth'})

    const id1 = setTimeout(() => {
        messageReceivedCloseBtn.style.opacity = '1'
    }, 1000);

    if (messageReceivedContainer.classList.contains('drop-message')) {
        setTimeout(() => {
            messageReceivedContainer.classList.remove('drop-message')
        }, 50000);
    }
}


// Fetch CSRF_TOKEN
function getToken() {
    const input = messageForm.querySelector('input[type="hidden"]')

    if (!input.value) {
        return {error:'Form token not available'}
    }
    return input.value
}

// Submits the form(3)
async function submitForm(body) {
    const {name, email, message } = body

    if (name && email && message) {
        const token = getToken()
        const url = `${window.location.origin}/contact/`

        if (!token.error) {
            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': token
                },
                body: JSON.stringify(body)
            });
            const data = await resp.json()
        
            if (data.error) {

            }
            else {
                messageForm.reset()
                submitBtn.textContent = 'Send message'
                submitBtn.style.padding = '1rem 2rem'
                submitBtn.disabled = false
                showSentMessage(data)
            }
            
        }
        else {
            window.alert(token.error)
        }
    }
}

// Handles form sumit (2)
function handleFormSubmit(e) {
    e.preventDefault()

    const span = document.createElement('span')
    span.setAttribute('class', 'loader')

    submitBtn.style.width = `${submitBtn.clientWidth}px`
    submitBtn.style.padding = '0.5rem 2rem'

    submitBtn.innerHTML = ''
    submitBtn.appendChild(span)
    submitBtn.disabled = true
    
    const formChildren = Array.from(messageForm.children)
    let body = {}
    
    formChildren.forEach(function(child) {
        if(child.name === 'name' || child.name === 'email' ||
            child.name === 'message') {
            const name = child.name
            body = {...body, [name]:child.value}
        }
    })
    submitForm(body)
}

// Form submit event (1)
messageForm.addEventListener('submit', handleFormSubmit)
