var lista = ['Passaro', 'Céu', 'Estrela', 'Planeta', 'cometa', 'barco', 'pessoa', 'Camisa']

function obterPalavra(arr){
let palavra = ''
   return palavra = arr[Math.floor(Math.random() * arr.length)];
    
}
var palavra = obterPalavra(lista).toLowerCase();

function ultLetra(pal){
    let letra = pal[pal.length -1];
    return letra;
}

console.log(`A palavra é ${palavra}`);
console.log(`A ultima letra é ${ultLetra(palavra)}`);