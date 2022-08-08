(function readyJs(win, doc){
    'use strict';
    let btn = doc.querySelector('#btnDB');


    //Show database Json
    function showDb() {
        let ajax = new XMLHttpRequest();
        ajax.open('GET','javascript/db.json');
        ajax.onreadystatechange = function() {
            if(ajax.status === 200 && ajax.readyState === 4){
                let res = JSON.parse(ajax.responseText);
                let car = res.car;
                for(let i = 0; i < car.length; i++){
                    console.log(car[i].color);
                }

            }
        };
        ajax.send();
        
    }
    btn.addEventListener('click', showDb, false);
    

})(window, document);