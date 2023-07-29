// variavel com validação do nome
var validaNome = new RegExp("^\d{3}\.\d{3}\.\d{3}-\d{2}$")

//variavel com validação da senha
var validaSenha = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]+$");

//verifica na lista se o usuário 
function verificaDadosUsuario(){
    
    let nomeUsuario =  document.getElementById("username").value;
    let senha = document.getElementById("password").value;
    let saida = document.getElementsByClassName("saida")[0];
    
    if(validaNome.test(nomeUsuario) && validaSenha.test(senha)){
        return saida.innerHTML = "Login efetuado com sucesso";
    } else{
        return saida.innerHTML = "Verificar os dados digitados";
    }
}

//registra usuário

function registraUsuario(){
    let listaUsuarios = {
        nome: document.getElementById("username").value,
        senha: document.getElementById("password").value,
    };
    listaUsuarios.push(usuario);
    verificaDadosUsuario();
}


//analisar se o usuário não é cadastrado.
function cadastraUsuario(){
    if(!verificaDadosUsuario()){
        return  saida.innerHTML = "Criar cadastro";
    } 
    let objetoUsuario = {
        nomeUsuario: document.getElementById("nomeUsuario").value,
        email: document.getElementById("email").value,
        cpf: document.getElementById("cpf").value,
        senha: document.getElementById("senha").value,
    }
}

// login usuário
function fazerLogin(){
    let botaoDeLogin = document.getElementById('botaoDeLogin').value;
    

}