let listaDeNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exebirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
exebirTextoNaTela('h1', 'Jogo do número secreto');
exebirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

if (chute == numeroSecreto){
    exebirTextoNaTela('h1','Acertou!😁👏');
    let palavraTentativa = tentativas > 1 ? 'tentativas' :'tentativa'
    let mensagensTetantivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    exebirTextoNaTela('p',mensagensTetantivas);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (chute > numeroSecreto){
    exebirTextoNaTela('p','O número secreto é menor');
   } else {
    exebirTextoNaTela('p','O número secreto é maior');
   }
  tentativas++;
  limparCampo();
  }
}

function gerarNumeroAleatorio() {
 let numeroEscolihido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

 if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
 }
 
 if(listaDeNumerosSorteados.includes(numeroEscolihido)) {
    return gerarNumeroAleatorio();
 } else{
    listaDeNumerosSorteados.push(numeroEscolihido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolihido;
 }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
    
}
