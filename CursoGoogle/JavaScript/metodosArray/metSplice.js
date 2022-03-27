let tamcamisas = ['P', 'M', 'G', 'GG'];
let startPoint = 1;
let itensToReplace = 2;
let newItem = 'EG';

console.log(`Lista antiga: ${tamcamisas}`);
tamcamisas.splice(startPoint, itensToReplace, newItem); 
console.log(`Lista nova: ${tamcamisas}`);