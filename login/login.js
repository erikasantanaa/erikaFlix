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


/**Validar campos login - verificar erro no input email*/
function validarLogin(login) {
    const EspacoEmBranco = login.email.length > 0 || login.password.length > 0
 
    const validarEmailRegex = /^\w+@[a-z]+(\.[a-z]+){1,2}$/
    const validarEmail = validarEmailRegex.test(login.email)

    let validarSenhaRegex = /^.{5,6}$/
    let validarSenha = validarSenhaRegex.test(login.password)
    
    if(EspacoEmBranco) {
        email.classList.remove('errorInput')
    } else {
        email.classList.add('errorInput')
    };   
    
    if(EspacoEmBranco) {
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