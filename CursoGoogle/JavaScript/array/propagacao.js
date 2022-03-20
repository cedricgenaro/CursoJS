/* Horários de partidas */
let aviao = ['8am', '12pm', '6am'];
let trem = ['7pm', '11am', '3pm'];
let onibus = ['10am', '2pm', '4pm'];
/* Unindo todos os horários */
let partidas = [...aviao, ...trem, ...onibus];

for (let horario of partidas ){
    console.log(horario);
}
console.log(`${partidas.length} Total de horários`);