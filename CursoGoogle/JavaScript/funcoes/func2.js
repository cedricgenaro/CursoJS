var numeros = []; // declaração de listagem ( Array)
geralista(numeros) // função que gera 5 números aleatórios 
function geralista(arraynum){
    for (let cont = 0 ; cont < 5; cont++){
      let aleatorio = Math.floor(Math.random()*100)
      arraynum[cont] = aleatorio;
    }
    return arraynum;
} 
/* Funão que compara o último valor maior encontrado com o próximo número do array */
function encmaior (a, b) {
    return a > b ? a : b;
}
/* Função para encontrar o maior valor em um array */
function maiorvalor (array){
    let max = 0;
    for (let num of array) {
        max = encmaior(max, num);
    }
    return max;
}

console.log(numeros);
console.log(maiorvalor(numeros))