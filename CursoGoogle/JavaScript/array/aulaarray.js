
var respostas = ['sim', 'não', 'talvez', 'Sim faça isso!', 'Com certeza não!'] //AQUI DECLARAMOS UM ARRAY DE STRINGS 

//ABAIXO TEMOS UMA FUNÇÃO QUE QUANDO CHAMADA PEGA UM VALOR ALEATÓRO
function pickRandom(array){
    return res = array[ Math.floor( Math.random()*array.length)].toUpperCase(); // ATRIBUIMOS A UMA VARIÁVEL O RESULTADO QUE O MÉTODO random() do objeto Math nos traz, com esse método ele gera um número aleatório na forma decimal multiplicamos pelo tamanho do array para que não ultrapasse o tamanho do array. Com o método floor() do objeto Math, arredondamos o número gerado para ser um número inteiro sem casa decimal. Por fim a função dará o retorno da variável res com o resultado do array na posição aleatória gerada.   
}
console.log("Faça a sua pergunta que tenham como respostas sim ou não: ");


console.log(pickRandom(respostas));

function jogar(){
    window.prompt('Digite sua pergunta em que a resposta seja sim ou não:')
    window.alert(pickRandom(respostas))
}