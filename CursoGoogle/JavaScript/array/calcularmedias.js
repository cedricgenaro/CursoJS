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
/* Criamos duas variaveis que irá pegar os objetos correspondentes*/
let saopaulo = getData('São Paulo', hoteis);
console.log('A média dos hoteis de São Paulo é: ');
/* Aqui chamamos a função obter média cidade com o objeto selecionado */
console.log(mediaCid(saopaulo));
let riojaneiro = getData('Rio de Janeiro', hoteis);
console.log('A Média dos hoteis do Rio de Janeiro é ');
console.log(mediaCid(riojaneiro));


