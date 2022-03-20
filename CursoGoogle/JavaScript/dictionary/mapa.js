let palavra = 'banana';

function mapString(string) {
    let map = {};
    for (let i = 0; i < string.length; i++) {
        let letra = string[i];
        if(map[letra]){
            map[letra].push(i);
            
        } else {
            map[letra] = [i];
        }
    }
    return map;
}
console.log(palavra);
let mapa = mapString(palavra);
console.log(mapa);
/* for (let letra in mapa){
    console.log(letra + ': ' + mapa[letra]);
} */