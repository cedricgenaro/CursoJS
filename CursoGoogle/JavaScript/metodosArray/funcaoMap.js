let doces = [
    {name: 'pirulito', price: 1.85},
    {name: 'bala', price: 0.25},
    {name: 'chocolate', price: 2.50},
    {name: 'maria-mole', price: 0.99},
    {name: 'chiclete', price: 0.15}
];

let names = doces.map((item) => {return item.name});
let prices = doces.map((item) => {return item.price});

console.log('Nomes: ' + names);
console.log('Preços: ' + prices);
