//Hoisting

function hoistng(){
    let a = 2;
    let b = 3;

    inside();
    
    function inside(){
        alert('this is an example');
    }
    
    return a * b;
}

console.log(hoistng());