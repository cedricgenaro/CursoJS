let precosAviao = [250, 350.99, 325.89, 458, 320.89, 240.99, 299.89];
let max = precosAviao[0];
let min = precosAviao[0];
console.log(precosAviao);

function comparaMaximo(valor) {
    max = valor > max ? valor : max;
}
function comparaMinimo(valor) {
    min = valor < min ? valor : min;
}

precosAviao.forEach(comparaMaximo);
precosAviao.forEach(comparaMinimo);

console.log('Preço máximo: R$' + max);
console.log('Preço mínimo: R$' + min);
