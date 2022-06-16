const button = document.querySelector('#button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    if (email.value === '' ) {
        email.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }

    if (password.value === '' ) {
        password.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }

    //validação email
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)) {
        email.classList.add('errorInput')
    } else  {
        email.classList.remove('errorInput')
    }

    //validação número telefone
    if (!isNaN(email.value) === true && email.value.length == 11) {
        email.classList.remove('errorInput')
    }

    //validação senha
    if (password.value.length <= 5) {
        password.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }
})