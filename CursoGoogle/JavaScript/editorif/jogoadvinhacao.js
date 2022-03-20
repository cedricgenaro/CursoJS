function pickRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
var ervilha = pickRandom([1, 2, 3]);

if (ervilha !== 1){
    console.log('A ervilha não está no copo 1')
}
if (ervilha !== 3){
    console.log('A ervilha não está no copo 3')
}
console,console.log(`A ervilha está no copo ${ervilha}`);

