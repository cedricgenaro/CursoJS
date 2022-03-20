function selector(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

var moeda = selector(['Cara', 'Coroa']);

if (moeda === 'Cara'){
    console.log('Deu Cara!')
}
if (moeda === 'Coroa'){
    console.log('Deu Coroa!')
}

