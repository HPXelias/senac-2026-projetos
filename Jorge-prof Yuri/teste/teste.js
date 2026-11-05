function media(){
    let nome = window.prompt(`Qual o nome do aluno?`)
    let nota1 = number(window.prompt(`insira a primeira nota de ${nome}?`))
    let nota2 = number(window.prompt(`alem da nota ${nota1}, qual foi a segunda nota de ${nome}?`))
    med = (nota1 + nota2)/2

    let msg //criar uma variavel e deixar ela vazia
    if(med >= 6){// se por acaso a media foi 6.0 ou mais...
        msg = 'meus parabens aprovado'}else if(med <=5.9){
            msg = 'seu burro estude !! reprovado'
        }

        // o if e uma estrutura  que cria uma condiçao, que execulta um bloco de comando ou outro, dependendo do resultado de um teste logico
        
        let res = document.getElementById('situacao')
        res.innerHTML = `<p> Calculando a media final de <mark>$(nome)</mark>,</p>`
         res.innerHTML += `<p> as notas obtidas foram<mark>$(nota1) e $(nota2)</mark>,</p>`
          res.innerHTML += `<p> a media final sera <mark>$(nome)</mark>,</p>`
           res.innerHTML += `<p> a mensagem que temos e: <strong style='color: blue'>$(msg)</strong>,</p>`
}