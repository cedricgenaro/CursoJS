
var destinos = ['Arabia', 'Senegal', 'Brasil', 'Estados Unidos ', 'Argentina', 'Paraguai', 'Bolivia', 'Egito', 'Austrália'];
let ultReg = destinos[destinos.length - 1]; /* Aqui estamos pegando o ultimo registro do Array destinos */
console.log(`O último registro do array é ${ultReg}`);
 let grecia = {
    dest: 'Grécia',
    transporte: 'barco',
    custo: 200,
    cidade: 'Athenas'
 }
destinos.push(grecia); /* Aqui atribuimos um objeto que está armazenado dentro de uma varável */
last = destinos[destinos.length - 1]; /* Aqui acessamos o objeto dentro do array usando uma variável */
console.log(last.dest);

