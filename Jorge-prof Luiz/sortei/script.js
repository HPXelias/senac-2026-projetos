var jogadores = ['Kaue', 'João','Marcos','Lusca','Vinicius'];

function sortear(){

    var numero1 = Math.floor(Math.random() * jogadores.length);
    var numero2 = Math.floor(Math.random() * jogadores.length);

    while(numero1 === numero2){
        var numero2 = Math.floor(Math.random() * jogadores.length);

    }
    

    var jogador1 = jogadores[numero1];
    var jogador2 = jogadores[numero2];
       //mostrar na tela
       document.getElementById("jogador1").innerHTML = jogador1;
        document.getElementById("jogador2").innerHTML = jogador2;


}