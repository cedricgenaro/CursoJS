var color = ['vermelho', 'amarelo', 'verde'];

function seletor(cor){
    let coratual = cor[Math.floor(Math.random()*cor.length)];
    return coratual
}

    farol = seletor(color);
    console.log(`O farol está na cor ${farol}`);
    if (farol=='vermelho'){
        console.log('Carro para!');
    }
    if (farol=='amarelo'){
        console.log('Tenha atenção');
    }
    if (farol=='verde'){
        console.log('Carro avança!');
    }
