// DECLARANDO E CHAMANDO FUNÇÃO
function funcao(){
    console.log("Essa é uma mensagem de teste.");
}
funcao()

// FUNÇÕES COM PARÂMETROS
function mensagem(primeiro, segundo){
    console.log('tudo certo,', 'jovem !');
}
mensagem()

// EXPRESSÃO DE FUNÇÃO COM NOMEAÇÃO
var funcao_nomeacao = function(){
    console.log("Sou uma mensagem de uma expressão de função !")
}
funcao_nomeacao();

// ARROW FUNCTION
var funcao = () => {
    console.log('Sou uma arrow function.')
}
funcao();

