var subsequence = 'abppplee';
var stringSequence = ['able', 'ale', 'apple'];
function findPalavralonga(array){
    let longestWord = ''
    for (let elem of array) {
        /* Esse if irá verificar se o tamanho da palavra do array é maior que o da armazenada na variável longestword  */
        if (elem.length > longestWord.length){
            longestWord = elem;
        }
    }
    return longestWord;
}


console.log(subsequence);
console.log(stringSequence);
console.log(findPalavralonga(stringSequence));