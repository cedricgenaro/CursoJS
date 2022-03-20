let stringSequence = 'abppplee';
let palavra = 'bala';

//let palavra = 'kangaroo';

console.log(palavra);

function makeMap(string){
    let mapLet = {} 
    for (let i = 0; i < string.length; i++){
        let letra = string[i]
        if(mapLet[letra]){
            mapLet[letra].push(i);
        }else{
            mapLet[letra] = [i];
        }

    }
    for (let letra in mapLet){
        console.log(letra + ': '+ '['+ mapLet[letra]+']');
    }
    return mapLet;
}

function compareLetters(pal, objet){
    /* Verifica se todas as letras da palavra existem dentro das propriedades do objeto se alguma letra não existir a função retorna false */
    for(let letra of pal){
        if(objet[letra]){

        }else{
            return false;
        }
        return true;
    } 
}

let stringSequenceObject = makeMap(stringSequence);
console.log(compareLetters(palavra, stringSequenceObject));
