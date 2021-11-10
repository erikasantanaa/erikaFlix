
//Pega valores cadastro 
function pegaValores() {
    let usuario = document.getElementById('usuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let repetirSenha = document.getElementById('repetirSenha').value
    let button = document.getElementById('botao').value 

    const form = {
        usuario: usuario,
        email: email,
        senha: senha,
        repetirSenha: repetirSenha
    };
    
    this.validaCampos(form)
};

//validar campos cadastro
 function validaCampos(form) {
    let camposPreenchidos = form.usuario.length > 0 && form.email.length > 0 
    && form.senha.length > 0 && form.repetirSenha.length > 0

   if(camposPreenchidos) { 
            if(form.senha === form.repetirSenha) { 
                 console.log('Senhas iguais')

            } else { 
                alert('Senhas Diferentes')         
            }
    } else { 
        alert('Preencha todos os campos!')
    };
 };


//salvar localStorage





 