

/* Pegar o valor digitado */

let carteira = 50;
/* Fazer a conversão de Dólar para a moeda Japonesa */
function inyen(dollars){
    let yen = dollars*113;
    return yen;
}
/* Fazer a coneversão de dólar para a moeda tailandesa */
function inBaht(dollars){
    let baht = dollars*33;
    return baht;
}
console.log(carteira+" U$ dollars is: ");
/* Retornar o valor em moeda Japonesa */
console.log(inyen(carteira) + ' Japanese yen');
/* Retornar o valor em moeda Thailanesa */
console.log(inBaht(carteira)+" Thai baht");