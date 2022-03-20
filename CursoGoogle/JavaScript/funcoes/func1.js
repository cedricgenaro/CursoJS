var carteira = 0.00;

function sacar (valor,daonde){
    if ((daonde - valor) < 0){
        return console.log('Seu saldo é insuficiente para essa operação!')
    }else{
        carteira -= valor
        return console.log(`Operação realizada com sucesso! \n Seu saldo agora é de R$${carteira.toFixed(2).replace('.',',')}`);
    }
}

function depositar (valor, paraonde){
    carteira += valor;
    console.log(`Operação realizada com sucesso! \n Seu saldo atual é de R$${carteira.toFixed(2).replace('.',',')}`);
}

depositar(10.00, carteira);
sacar(1.50, carteira);
//console.log(carteira.toFixed(2).replace('.',','));