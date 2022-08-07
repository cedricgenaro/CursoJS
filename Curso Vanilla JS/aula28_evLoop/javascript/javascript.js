(function readyJs(win, doc){
    'use strict';

    let btn = doc.querySelector('#btn');
    let rel = doc.querySelector('#relogio');
    let seg = doc.querySelector('#seg');
    /* console.log('Hello');

    function counter(){
        for(let i = 0; i < 10; i++) {
            console.log(i);
        }
    }
    
    btn.addEventListener('click', counter, false);
    console.log('World!');
   
    //setTimeout(counter, 3000);
    //setInterval(counter, 3000);
 */
    let horas = new Date();
    let s = horas.getSeconds();
    let m = horas.getMinutes();
    let  h2 = horas.getHours().toString()[1];
    if(h2 == undefined){
        h2 = 0;
    }
    let h1 = horas.getHours().toString()[0];
    let st = '0';
    let min59 = false;
    
    let h = horas.getHours().toString()[0];
    console.log(h);
    
    function counter() {  
        s++;
        //Verifica se o segundo e os minutos são maior igual a 60 se for recebem 0
        if(s >=60 ){
            s = 0;
            m++;
        }
        if(m >= 60 ){
            m = 0;
            h2++;
            min59 = true;

        }
        
        //Verifica se o segundo é menor que 9 se for recebe uma string 0 concatenada
        if (s <= 9){
           s = st+s;
        }else{
            s = s;
        }
        //Verifica se a segunda casa das horas é maior que se for recebe 0 e soma um a pripeira casa das horas
        if(h2 >= 10){
            h1++;
        }
      
       //Vrifica se o minuto é menor que 9 se for exibe com um 0 na frente
       //rel[2].style.color = 'black';
        if(m <= 9){
            rel.innerHTML = `${h1}${h2}:0${m}`;
            
        }else{
            rel.innerHTML = `${h1}${h2}:${m}`;
        }
        seg.innerHTML = `:${s}`;   
        
        //Zera o relógio assim que for meia noite
        if(h1 == 2 && h2 == 3 && m == 59 && s == 59) {
             h2 = horas.getHours().toString()[0];
             h1 = 0;
        }
        
        
         
        setTimeout(counter, 1000);


    }
    counter();
    

})(window, document);