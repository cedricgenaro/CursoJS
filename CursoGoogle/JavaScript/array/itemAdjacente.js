let itens = ['Primeiro', 'segundo', 'quarto', 'terceiro'];
let index = 0;

function pegaradjacent(array, i) {
    let segItem = i + 1;
    return array[segItem];
}

console.log('O primeiro item é o '+itens[index]+' o segundo é o '+ pegaradjacent(itens, index) );
