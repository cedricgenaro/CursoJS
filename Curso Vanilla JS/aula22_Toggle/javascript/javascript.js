(function readyJS(win, doc) {
    'use strict';
    
    let btn = doc.querySelector('#btn');
    let menu = doc.querySelector('.menu');
    let body1 = doc.querySelector('body');

    function toogle(event){
        if(menu.classList.contains("show")){
            menu.classList.remove("show");
            //btn.setAttribute('src', 'image/fecharMenu.jpg');
            btn.setAttribute('src', 'image/menuabrir.jpg');
            body1.style.backgroundColor = 'white';
        }else{
            menu.classList.add("show");
            btn.setAttribute('src', 'image/fecharMenu.jpg');
            body1.style.backgroundColor = 'black';
            
        }
    }

    btn.addEventListener('click',toogle,false);
})(window, document);