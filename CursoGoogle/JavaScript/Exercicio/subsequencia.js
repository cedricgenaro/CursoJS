let stringSequence = 'hullaballoo';
let dictionaryWord = 'boo';

console.log(stringSequence);
console.log(dictionaryWord);
/* Função que cria um objeto que mapeia a posição de cada letra */
function makeMap(stringmap) {
    let mappedString = {};
   for (let i = 0; i < stringmap.length; i++) {
       let letra = stringmap[i];
       if(mappedString[letra]){
           mappedString[letra].push(i);
       }else{
           mappedString[letra] = [i];
       }
   }
    return mappedString;
}

function findNextIndex(array, minindex){
    console.log(`O minidex inicial vale ${minindex}`);
    for (let index of array) {
        console.log(`O array vale ${array}`)
        console.log(`O index vale ${index}`);
        if(index >= minindex){
           return index + 1;
        }
            
    }
    return false;
}

function isSubsequence(pal, map){
    let minindex = 0;
    /* O laço for percorre toda a palavra a ser verificada se é ou não uma subsequência */
    for(let letra of pal){
        console.log(`A letra é ${letra}`);
        console.log(`O map[letra] vale ${map[letra]}`);
        /* O If irá verificar se dentro do objeto que mapeia a posição das letras da palavra principal existe a letra da palavra a se verificar se é subsequente  */
        if(map[letra]){
            /* Se exister recebe o resultado da função findNextIndex que se der tudo certo ela irá retornar o valor final do array mais 1 */
            minindex = findNextIndex(map[letra], minindex);
            /* Se em meio ao laço o minindex receber false o If abaixo encerra o laço e retorna false */
            if(minindex === false){
                return false;
            }
            console.log(`O miniindex esta valendo ${minindex}`);
        }else{
            return false;
        }

    }
    console.log(`O miniindex final vale ${minindex}`);
    return true;
}

let mappedString = makeMap(stringSequence);
console.log(isSubsequence(dictionaryWord, mappedString));

