(function readyJS(win, doc) {
    'use strict';
    /* let type = null;
    console.log(typeof type); */
    /* let arr = [0, 1, 'Thiago', {'age': 18}, null];
    let obj  = {"name": "Thiago", "city": "BH"};
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "object"){
            console.log(arr[i]);
        }
    }
    console.log(Array.isArray(arr)); */
    let data = {
        car: {
            year: 2018,
            color: 'black',
            arr: [0, 1, 2, 3]
        }
    };
    let data2 = '{"name": "Thiago", "age": "33"}';
    console.log(JSON.parse(data2));
})(window, document);