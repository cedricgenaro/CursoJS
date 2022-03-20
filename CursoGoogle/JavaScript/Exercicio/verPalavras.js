var lista = ['Passaro', 'Ceu', 'Estrela', 'Planeta', 'cometa', 'barco', 'pessoa', 'Camisa', 'piranha', 'triangulo']
var espaco = '-a-c-'

function obterPalavra(arr){
let palavra = ''
   return palavra = arr[Math.floor(Math.random() * arr.length)];
    
}
var palavra = obterPalavra(lista).toLowerCase();

function check(space, palavra) {
    if(space.length != palavra.length){
        return false;
    }
    for(let i = 0; i < space.length; i++){
        /* Nesta função o if terá que atender as duas condições para que retorne como False se em algum momento do laço atender a condição o laço é encerrado e termina a função dando o retorno como false */
        if(space[i] !== '-' && space[i] !== palavra[i]){
            return false;
        }
    }
    return true;
}
console.log(palavra);
console.log(check(espaco, palavra));


