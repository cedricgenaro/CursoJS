let doces = [
    {name: 'pirulito', price: 1.85},
    {name: 'bala', price: 0.25},
    {name: 'chocolate', price: 2.50}
];

let nomeOf = (item) => {return item.name};
let priceOf = (item) => {return item.price};

console.log(nomeOf(doces[2]));
console.log(priceOf(doces[2]));
