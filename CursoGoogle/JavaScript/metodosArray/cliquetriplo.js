let carShopping = ['towel', 'soap', 'brush', 'brush', 'brush', 'sponge'];
let index = carShopping.indexOf('brush');
carShopping.splice(index, 3, 'comb');
console.log(carShopping);