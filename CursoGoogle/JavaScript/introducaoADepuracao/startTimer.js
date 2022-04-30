export function startTimer(numb){
    var timer = numb;
    if (isNaN(timer)){
        throw new Error ('Erro não foi digitado um número!') 
    }else {
      return console.log(`O timer foi ajustado para ${timer} minutos`);
    }
}   
