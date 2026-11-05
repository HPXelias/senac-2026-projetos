//alert("voce ganhou 1000 reais no tigrinho")

//entrada de dados
//variaveis servem para armazenar dados temporariamente
var nome = "Cleitinho Rodrigues Cunha"; //string
var idade = 19;                         //inteiro
var peso = 80.3;                       //decimal
var altura = 1.55;                     //decimal
var salario = 2000.50;                 //decimal
var votacao = true;                    //booleano
var documento = false;
var titulo = true;

if(idade >= 16){
  //  alert("pode voltar")
}

//estrutura condicional
if(idade >= 16 && idade <= 70 && documento == true && titulo == true){
    //alert("Pode votar! "+ nome)
}else{
   // alert("não pode votar! sua idade é "+ idade);
}

if((idade < 18 && idade > 15 ) || idade >= 70){
   // alert("Seu voto é facultativo");
}


//estrutura de repetiçao
//lista - arrays
//                0      1      2      3        4
candidatos = ['Augusto Cury','Lula','Flavio','Renan'];
numeros = [5 ,2 ,4 ,7 ,3 ,1]

//imprimir
console.log(candidatos[2])

//estrutura de repetiçao
var posicao = 0;
while(posicao < 4){
    console.log("candidato: "+ candidatos[ posicao]);
    posicao = posicao + 1;

}

for(contador=0; contador < candidatos.legth; contador++){
    console.log("testando for :  " + candidatos[contador]);
}
//trabalhando com funçoes
function baixarEstoque(){
    console.log("abaixou o estoque");

}

function lanceCaixa(){
    console.log("Dinheiro entrando no caixa");
}

function imprimirComprovante(){
    console.log("Imprimindo comprovante");

}

function efetuarVenda(){
    console.log("Fazendo venda...");
    baixarEstoque();
    lanceCaixa();
    imprimirComprovante();

}
//fazendo a chamada da funçao - normalmente atrelado a um botao
efetuarVenda();

//criando objetos
var pessoa = {nome: "elias" , idade: 16, altura: 1.75}
console.log(pessoa.nome);
console.log(altura);