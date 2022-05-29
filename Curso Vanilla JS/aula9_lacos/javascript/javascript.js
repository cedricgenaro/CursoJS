let numbers = "";
/* for(let i = 0; i < 10; i++) {
   numbers += i;
    if (i != 9){
        numbers += '-';
    }
} */
var i = 0;
/* while (i < 10){
    numbers += i;
    if (i != 9){
        numbers += '-';
    }
    i++;
} */


/* do{
    numbers += i;
    if (i != 9){
        numbers += '-';
    }
    i++;
}while(i < 10);
 */

let person = {
    name:'thiago',
    age: 18,
    city: 'New York'
}

for (key in person) {
    console.log(person[key]);
}
console.log(numbers);