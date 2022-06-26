(function readyJS(win, doc) {
    'use strict';
    
    let btn = doc.querySelector('#btn');
    let sel = doc.querySelector('#select');
    function alertar(event){
       alert('Alert!');
       
    }

    sel.addEventListener('change', alertar, false);
    btn.addEventListener('click', alertar, false);
    
    
})(window, document);