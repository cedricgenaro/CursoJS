let pessoa = {
    name: 'Thiago',
    idade: 20,
    cc: 123
}

let operacao = {
    sacar: function (saldo, valor){
        saldo -= valor;
        bank.saldo = saldo;
        return saldo;
    },
    depositar: function (saldo, valor){
        saldo += valor;
        bank.saldo = saldo;
        return saldo;
    }
}

let bank = {
    pessoa: pessoa,
    operacao: operacao,
    saldo: 50
}

let valor = 40;
console.log(bank.pessoa.name + ' portador da conta ' +
            bank.pessoa.cc+ 
            ' realizou um saque no valor de R$' +
             valor+
             ' ficando com '+
             bank.operacao.sacar(bank.saldo, valor)
);

console.log(bank.pessoa.name + ' portador da conta ' +
            bank.pessoa.cc+ 
            ' realizou um deposito no valor de R$' +
             valor+
             ' ficando com '+
             bank.operacao.depositar(bank.saldo, valor)
);