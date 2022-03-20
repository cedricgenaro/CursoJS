function calculoTaxa (valor){
    return valor * (15 / 100);
}

function divisaoPessoal (total, pessoas){
    let taxa = calculoTaxa(total);
    total += taxa;
    return total / pessoas;
}

console.log(`Cada pessoa vai ter que pagar R$${divisaoPessoal(76, 4).toFixed(2)}`);
