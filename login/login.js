//pehar valores login
function pegarValoresLogin() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    const login = {
        email: email,
        senha: senha
    };

    this.validarLogin(login)
};

//Validar campos login
function validarLogin(login) {
    let camposLoginPreenchidos = login.email.length > 0
     && login.senha.length > 0

    if(camposLoginPreenchidos) {
        console.log('Campos preenchidos')
    } else {
        alert('Preencha todos os campos!')
    };        
};