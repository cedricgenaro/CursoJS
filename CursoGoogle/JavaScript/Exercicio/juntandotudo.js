let stringSequence = 'javascript'; /* Palavra principal */
let dictionary = ['art', 'vascular', 'avast', 'javas', 'vat' ]; /* subsequence */

/* Função que verica qual é a palavra subsequente mais longa */
function longestword (dict) {
    let longa = ''
    for (pal of dict){
        if(pal.length > longa.length){
            longa = pal
        }
    }
    return longa;
}
console.log(stringSequence);
console.log(dictionary) ;

/* Função que Mapeia uma palavra */
function mapString (stri) {
    let map = {};
    for (let i = 0; i < stri.length; i++) {
        let letra = stri[i];
        if (map[letra]){
            map[letra].push(i);
        }else{
            map[letra] = [i];
        }
    }
    return map;
}

function findNextindex(array, minindex){
    for (let index of array) {
        if (index >= minindex){
            return index + 1;
        }
    }
    return false;
}

/* Verifica se a palavra do array é uma subsequencia da palavra principal */

function isSubsequence (word, map){
    let minindex = 0;
    for (let letra of word){
        if (map[letra]){
            minindex = findNextindex(map[letra], minindex);
            if (minindex === false){
                return false;
            }
        }else {
            return false;
        }
       
    }
    return true;
}

/* Função que localiza as palavras subsequentes e coloca em uma array auxiliar */
function longestMatch (string, dic){
    let object = mapString(string);
    let subsequence = [];
    for (let pal of dic){
        if(isSubsequence(pal, object)){
            subsequence.push(pal);
        }
    }
    return longestword(subsequence);
    
}

console.log(longestMatch(stringSequence, dictionary));


