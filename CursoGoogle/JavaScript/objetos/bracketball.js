let obj = {};
let palavra = 'musica';

for(let i = 0; i < palavra.length ; i++) {
    let letra = palavra[i];
    obj[letra] = i;
}

for (let propriedade in obj) {
    console.log(`${propriedade} : ${obj[propriedade]}`);
    
}
