let hoteis = [
    hotel1 = {
        desc: 'Luxuoso',
        hating: 5.0,
        cidade: 'São Paulo',
        preco: 50.00
    }, hotel2 = {
        desc: 'Puroar',
        hating: 3.5,
        cidade: 'Rio de Janeiro',
        preco: 520.00
    },
    hotel3 = {
        desc: 'Laje',
        hating: 2.1,
        cidade: 'São Paulo',
        preco: 80.89
    },
    hotel4 = {
        desc: 'Barra',
        hating: 5.0,
        cidade: 'Rio de Janeiro',
        preco: 450.00
    }
];
function media (array) {
    let total = 0;
    for(let element of array){
        total += element;
    }
    return total / array.length;
}
/* Função que vai pegar apaenas o objeto que pertence a cidade que colocamos no parametro em sua chamada */
function getData (pesqCidade, listaHoteis ){
    let cidSel = [];
    for (let element of listaHoteis){
        if(element.cidade == pesqCidade){
            cidSel.push(element)
        }
        
    }
    return cidSel;
}
/* Função que recebe o objeto cidade que tem uma variável que chama a função de obter as notas do objeto selecionado, por ultimo ela retorna o resultado da chamada da função media passando como parametro o array contendo as notas pertencentes ao objeto */
function mediaCid (hotellist) {
    let ratings = getRatings(hotellist);
    return media(ratings)
}

/* Função que irá armazenar os Ratings em uma nova array */
function getRatings (listHot) {
    let ratings = [];
    for (let element of listHot) {
        ratings.push(element.hating);
    }
    return ratings;
}
/* Atribui um array de objetos com a cidade = a São Paulo */
let saopaulo = getData('São Paulo', hoteis);
/* Função que percorre o objeto e traz apenas o que for menor que 100 no preço */
function menorpreco (hotel){
    return hotel.preco < 100
}

let nomehotbarato = saopaulo.filter(menorpreco);
console.log('A média do hotel de São Paulo abaixo de R$ 100.00: ');
/* Chama a função que calcula a média pasando como parametro o array com os ratings dos hoteis com preço abaixo de 100 */
console.log(mediaCid(nomehotbarato));

