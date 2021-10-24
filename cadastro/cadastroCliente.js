
//Pega valores do cadastro em geral
function pegaValores() {
    let usuario = document.getElementById('usuario').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let repetirSenha = document.getElementById('repetirSenha').value

    const objeto = {
        usuario: usuario,
        email: email,
        senha: senha,
        repetirSenha: repetirSenha
    };
    
    this.validaCampos(objeto)
};

/*Campos Preenchidos: 
(Senhas iguais validar), 
Senhas diferentes (gerar alerta), 
Falta Caracteres (gerar alerta),

*/
 function validaCampos(objeto) {
    let camposPreenchidos = objeto.usuario.length > 0 && objeto.email.length > 0 
    && objeto.senha.length > 0 && objeto.repetirSenha.length > 0
    console.log(camposPreenchidos)

   if(camposPreenchidos) {
            console.log('Validação de campos Ok') //
            if(objeto.senha === objeto.repetirSenha) {
                console.log('Senhas iguais')
            } else {
                console.log('Senhas diferentes')
            }
    } else {
        console.log('Validação de campos Negado')
    };
 };

 let senha = document.getElementById('senha').value
if (senha.length > 7){
   console.log('teste')
}

 //Comprimento de caracteres e numeros nos campos


 