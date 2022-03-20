
function acHora(hora){
    return console.log(`Seu alarme foi acertado para às ${hora}`);
}
function altHora(hora){
    return console.log(`Seu alarme foi alterado com sucesso para às ${hora}`);
}

function meuAssistente(time, chamaFuncao){
    console.log('Eu sou o seu assistente virtual, estou feliz por lhe ajudar!');
    chamaFuncao(time);
}

meuAssistente('06h00', acHora);
meuAssistente('10h00', altHora); 