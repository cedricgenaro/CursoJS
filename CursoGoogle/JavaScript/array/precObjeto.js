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
    }
];

for (var elemento of hoteis) {
    if(elemento.cidade == 'São Paulo'){
        console.log(elemento.hating);
    }
    
}