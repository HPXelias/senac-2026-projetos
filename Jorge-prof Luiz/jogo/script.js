var jogador = "x"

function jogar(celula){
    //comparar se a celula esta vazia para assim escrever
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;


        //alterna variavel jogador para a proxima jogada
        if(jogador == "x"){
            jogador = "o";
            celula.style.backgroundColor = "red"
        }else{
            jogador = "x"
             celula.style.backgroundColor = "blue"
        }
    }
}
function reiniciar(){
    window.location.reload();

}