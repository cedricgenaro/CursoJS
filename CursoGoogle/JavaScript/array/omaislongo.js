const almoco = ['Arroz', 'Feijão', 'batata', 'Ovo frito'];
const cafedamanha = ['Café', 'pão', 'frutas'];

/* função que verifica o Array mais longo */
function longer(menu1, menu2){
    if(menu1.length > menu2.length){
        return menu1;
    }else{
        return menu2;
    }
}
console.log(longer(almoco, cafedamanha));

