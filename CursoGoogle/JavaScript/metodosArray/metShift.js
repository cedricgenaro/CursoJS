var tvs = [
    {price: 81.02, size: '32"'}, 
    {price: 252.08, size: '40"' },
    {price: 353.55, size: '50"'}, 
    {price: 407.89, size: '55"'}, 
    {price: 464.76, size: '60"'}
];
function printTv (tv){
    console.log(tv.size + ' por R$'+ tv.price);
}

tvs.forEach(printTv);

console.log('O primeiro item é:');
printTv(tvs.shift());
console.log('O próximo item é:');
printTv(tvs.shift());