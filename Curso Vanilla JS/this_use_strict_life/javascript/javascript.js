/* console.log(this);

function teste(){
    console.log(this);
}

teste(); */

/* let obj = {
    name: 'Thiago',
    func: function(){
        return this.name;
    }
}

console.log(obj.func()); */

//Use strict
/* 
'use strict';

let x = 10;
console.log(x);

let eval2 = 10
console.log(eval2);
function teste(){
    console.log(this);
}

teste();
console.log(this); */

// immediately - invoked function expression (IIFE)
(function(win, doc ){
    'use strict';
    let x = 20;
    console.log(x);
    console.log(win);
    console.log(doc);
})(window, document);
