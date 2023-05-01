const nuestros = document.querySelector('.nuestros')

const createRipple = (e) => {
    let ripple = document.createElement('span')
    let x = e.clientX
    let y = e.clientY

    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'

    nuestros.appendChild(ripple)

    setTimeout(() => {
        ripple.remove()
    }, 5000)

    console.log(x, y)
}

nuestros.addEventListener('click', createRipple)