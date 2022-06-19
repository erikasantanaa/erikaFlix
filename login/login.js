
function pegarValoresLogin(event) {
    event.preventDefault()

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    const login = {
        email: email,
        password: password
    };

    this.validarLogin(login)
};


/**Validar campos login*/
function validarLogin(login) {
    let EspacoEmBrancoEmail = login.email.length > 0 
    let EspacoEmBrancoPassword = login.password.length > 0
    let validarEmail = login.email.indexOf('@') === -1 || login.email.indexOf('.') === -1 || (login.email.indexOf('.') - login.email.indexOf('@') == 1)
    let validar = /^.{5,6}$/
    let validarSenha = validar.test(login.password)

    if(EspacoEmBrancoEmail) {
        email.classList.remove('errorInput')
    } else {
        email.classList.add('errorInput')
    };   

    if(EspacoEmBrancoPassword) {
        password.classList.remove('errorInput')
    } else {
        password.classList.add('errorInput')
    };   

    if (validarEmail) {
        email.classList.add('errorInput')
    } else  {
        email.classList.remove('errorInput')
    }

    if (validarSenha ) {
        password.classList.remove('errorInput')
    } else {
        password.classList.add('errorInput')
        
    }
};


