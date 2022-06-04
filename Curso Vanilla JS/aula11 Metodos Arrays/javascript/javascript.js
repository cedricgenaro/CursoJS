let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['s', 't', 8];

//Concatenação


let arrFinal = arr1.concat(arr2);

//Every
let everyX = arrFinal.every(
    function verifyElements(elem, ind, obj){
        return (typeof elem == 'number');
    }
);


//Filter
let filterX = arrFinal.filter(
    function verifyElements(elem, ind, obj){
        return (typeof elem == 'string');
    }
);

//ForEach
let data = '';
let forEachX = arrFinal.forEach(
    function verifyElements(elem, ind, obj){
        if(typeof elem == 'string'){
            data += 'Índice ' + ind + ' :  ' + elem + '\n';
        }
        
    }
);

//indexOf

let indexOfX = arrFinal.indexOf('1');
console.log(arrFinal);
console.log(data);
console.log(indexOfX);
if(indexOfX == -1){
    alert('Esse dado não existe.');
}