let partidas = ['8am', '12pm', '6am', '7pm', '11am', '3pm','10am', '2pm', '4pm' ]
for (let horario of partidas){
    console.log(horario);
}
/* Funçoes de Pesquisa */
function dia(hora){
    //return hora.length == 4;
    return hora.includes('am');
}

function noite(hora){
    return hora.includes('pm');
}
/* Variáveis que recebem o resultado do filtro que recebe o resultado das funções de pesquisa */
let amHoras = partidas.filter(dia); 
let pmHoras = partidas.filter(noite);
console.log('Dia Horários: ' + amHoras);
console.log('Noite Horários: ' + pmHoras);