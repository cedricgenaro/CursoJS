let hoteis = [
    hotel1 = {
        desc: 'Luxuoso',
        hating: 5.0,
        cidade: 'São Paulo'
    }, hotel2 = {
        desc: 'Puroar',
        hating: 3.5,
        cidade: 'Rio de Janeiro'
    },
    hotel3 = {
        desc: 'Laje',
        hating: 2.1,
        cidade: 'São Paulo'
    },
    hotel4 = {
        desc: 'Barra',
        hating: 5.0,
        cidade: 'Rio de Janeiro'
    }
];
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
/* Função que irá armazenar os Ratings em uma nova array */
function getRatings (listHot) {
    let ratings = [];
    for (let element of listHot) {
        ratings.push(element.hating);
    }
    return ratings;
}

console.log('Rating Arrays:');
/* Chamamos a função Get Ratings que recebe como parâmetro o resultado da função getData */
console.log(getRatings(getData('São Paulo', hoteis)));