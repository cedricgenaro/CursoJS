var numeros = [4,9,25,7,15,12,8,1,6];

function verifica (lista){
    for (let elem of lista){
        if (elem > 8){
            return false;
        }
    }
    return true;
}

console.log(verifica(numeros));
