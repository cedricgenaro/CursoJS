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
/* console.log(arrFinal);
console.log(data);
console.log(indexOfX); */
if(indexOfX == -1){
    //alert('Esse dado não existe.');
}

//Last Index Of

let lastIndexOfX = arrFinal.lastIndexOf('s');
//console.log(arrFinal);
//console.log(data);
//console.log(lastIndexOfX);
if(lastIndexOfX == -1){
    alert('Esse dado não existe.');
}

//Join
let joinX = arrFinal.join(' - ');

//Map
let mapFinal = [];
let mapX = arrFinal.map(
   
    function verifyElements(elem, ind, obj) {
        if(typeof elem == 'number'){
            mapFinal.push(elem * 3);
        }else {
            mapFinal.push(elem);
        }
        
    }
);

mapFinal.pop();

//Some
let someX = arrFinal.some(
    function verifyElements(elem, ind, obj) {
        return (typeof elem == 'number');
    }
);

//Reverse
let reverseX = arrFinal.reverse();
console.log(arrFinal);
console.log(reverseX);
