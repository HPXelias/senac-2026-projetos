function jogarJokempo(escolhaUsuario){
//pegar os elementos do HTML onde os texto serao Exibidos
let divEscolhas = document.getElementByld("texto-escolhas");
let divResultado = document.getElementById("texto-resultado");



//Gerando a escolha do computador usando apenas if e else
    let numeroAleatorio = Math.random();
let escolhaComputador =" ";

if (numeroAleatorio <0.33){
    escolhaComputador ="pedra"
}else if (numeroAleatorio <0.66){
   escolhaComputador ="papel";

}else{
    escolhaComputador ="tesoura";
}


//mostrar na tela o que cada um escolheu

divEscolhas.innerHTML = "você:" + escolhaUsuario + "| Computador." + escolhaComputador;

//logica de Determinaçao do vencedor

if(escolhaUsuario == escolhaComputador){
    divResultado.innerText = "empate"
}else if(escolhaUsuario == "pedra" && escolhaComputador === "tesoura"){
    divResultado.innerText ="Jogador Venceu!! (Pedra amassa a Tesoura)";

}else if(escolhaUsuario == "tesoura" && escolhaComputador === "papel"){
     divResultado.innerText ="Jogador Venceu!! (Tesoura amassa papel)";

}else if(escolhaUsuario == "papel" && escolhaComputador === "pedra"){
 divResultado.innerText ="Jogador Venceu!! (papel amassa a pedra)";

}else if(escolhaComputador == "papel" && escolhaUsuario === "pedra"){
    divResultado.innerText ="Jogador Perdeu!! (papel amassa a pedra)";

}else if(escolhaComputador == "pedra" && escolhaUsuario === "tesoura"){
    divResultado.innerText ="Jogador Perdeu!! (Pedra amassa a Tesoura)";

}else if(escolhaComputador == "tesoura" && escolhaUsuario === "papel"){
    divResultado.innerText ="Jogador Perdeu!! (Tesoura amassa papel)";
}
}