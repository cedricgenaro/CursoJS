let testes = ['Passou', 'Passou', 'Passou', 'Passou'];

function check(resultados){
    for(let result of resultados){
        if  (result === 'Falhou'){
            return 'Falhou';
        }
    }
    return resultados.length;
}

console.log(check(testes));

