let numeros = [2, 3, 5];

function somar(num) {
    let resultado = 0
    for (let n of num) {
        resultado += n;
        console.log(resultado);
    }
    return resultado
}


console.log(`O resultado da soma é ${somar(numeros)}`);
