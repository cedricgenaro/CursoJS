var doces = [
    {item: 'Pirulito', price: 6.59},
    {item: 'Chocolate', price: 1.99},
    {item: 'Bala', price: 0.59},
    {item: 'Maria mole', price: 1.00},
    {item: 'Chiclete', price: 1.59}
];

function printDoces(itens){
    console.log(itens.item + ': R$' + itens.price);
}
doces.reverse();
doces.forEach(printDoces);