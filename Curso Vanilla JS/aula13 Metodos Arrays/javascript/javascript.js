let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['s', 't', 's'];

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
//let reverseX = arrFinal.reverse();

//Reduce
let reduceX = arrFinal.reduceRight(
    function verifyElements(v1, v2, ind, arr) {
        return v1 + v2;
    }

);

//Shift
//let shiftX = arrFinal.shift();
//let shiftX2 = arrFinal.shift();

//Slice
//let sliceX = arrFinal.slice(3, 7);

//Sort
//let sortX = arrFinal.sort();

//Splice

//let spliceX = arrFinal.splice(3, 3, 'Y', 'w', 0);
console.log(arrFinal);

//Unshift
//let unshiftX = arrFinal.unshift(-1, -2, -3);

//ToString
let toStringX = arrFinal.toString();
console.log(arrFinal);
console.log(toStringX);
