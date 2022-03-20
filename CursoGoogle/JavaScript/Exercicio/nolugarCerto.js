let indices = [3,7]; 
let minIndex = 4; /* Aqui seria o indice onde está a primeira letra da subsequence */
function findNextindex(array, minIndex){
    /* O laço for irá percorrer os indices que estão dentro do array e o if verificará se o valor do indice é maior ou = se for retornará o valor do índice mais 1 */
    for (let index of array){
        if(index >= minIndex){
            return index += 1;
        }
    }
    return false; 
}

console.log(indices);
console.log(minIndex); 
console.log(findNextindex(indices, minIndex));