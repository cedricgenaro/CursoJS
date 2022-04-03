let hour = [8, 10, 12, 13, 14, 15];
let prices = [1.90, 1.85, 3.99, 5.19];

let totalHours = hour.reduce((totH, today) => {return totH + today;}, 0);
let totPrices = prices.reduce((sum, price) => {return sum + price;}, 0);

console.log('Total de horas: ' + totalHours);
console.log('Total de custo: ' + totPrices);

