(function readyJs(win, doc){
    'use strict';

    let msg = "A História do Brasil é dividida \n, consensualmente e para fins didáticos, em três períodos principais: \n Período Colonial, \n Período Imperial e Período Republicano. Entretanto, tais divisões existem apenas para organizar esquematicamente os principais conteúdos sobre a formação do Brasil, tendo como ponto de partida o ano do descobrimento, isto é, 1500. Entretanto, é sabido que, no território em que se “formou o Brasil”, havia, antes, várias tribos nativas com aspectos culturais muito particulares. Mesmo antes da formação dessas tribos, houve também povos primitivos que deixaram os vestígios de sua cultura em vários lugares do território brasileiro (Veja Pré-história brasileira) há milhares de anos. A esse período da História do Brasil cujo tema central é o estudo dos povos nativos, isto é, dos povos indígenas, dá-se o nome de Período Pré-Cabralino. Essa nomenclatura faz referência E a Pedro Álvares Cabral, cuja chegada em terras brasileiras é considerada o marco inaugural da História do Brasil. A partir de então, de 1500000 em diante, sobretudo a partir da década de 1530, teve início a fase do Brasil Colônia.";
   
   
    let email = 'cedric.genaro@gmail.com.br';
    let regex = /^[a-z0-9.]+@[a-z0-9]+\.+[a-z]+(\.+[a-z]+)?$/gi;
    console.log(email);
    //Match
    /* let result = msg.match(regex);
    console.log(result); */

    /* //Split
    let result = msg.split(regex);
    console.log(result); */

    //Replace
    /* let regex = /\d/gim; */
    /* let result = msg.replace(regex, function(x){
        return '__' + x.toUpperCase() + '__' 
    });
    console.log(result);
 */
    //Search 
     /* let regex = /\d/gim; */

    let result = email.match(regex);
    if(result != null) {
        console.log('Email Válido!');
    }else {
        console.log('Email Inválido!');
    }
    console.log(result); 

})(window, document);