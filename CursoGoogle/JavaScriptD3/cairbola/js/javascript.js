var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);
var numDiv = 7;
var slotWidth = 30;

var color = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var slot = [];
for (var i=0; i<numDiv-1; i++) {
    slot[i] = 65+5+(i*(slotWidth+5))+15;
}
function pickRandom(paleta){
let corfinal = '#'
    if(paleta.length > 6){
        for (let i=0; i <= 5; i++) {
            let cores = Math.floor(Math.random() * (paleta.length-1));
            corfinal += paleta[cores];
       }
        return corfinal;
    }else{
        let pos = Math.floor(Math.random() * (paleta.length));
        return paleta[pos];
    }
   
}

function soltar(){
    svg.append('circle').attr('r', 15).attr('fill', pickRandom(color)).attr('cx', pickRandom(slot)).attr('cy', 0)
            .transition().duration(2000).ease(d3.easeBounceOut).attr('cy', 165);
    
    
}

function limpar() {
    svg.selectAll('circle').transition().duration(1000).attr('cx', 800).remove();
}

svg.append('path').attr('d','M0 0 L0 32 C0 44 4 48 16 48 L30 50 L30 30 C12 32 16 36 16 0 Z').attr('fill','silver').attr('transform','scale(2) translate(4 40)').attr('stroke','darkgrey');
svg.append('rect').attr('x',0).attr('y',0).attr('width',50).attr('height',50).attr('fill','grey').attr('stroke','darkgrey');
/* Botão vermelho */
var redButton = svg.append('rect').attr('x',5).attr('y',6).attr('width',40).attr('height',40).attr('fill','darkred');
var redButton = svg.append('rect').attr('x',5).attr('y',3).attr('width',40).attr('height',40).attr('fill','red');
/* Botão azul */
svg.append('rect').attr('x',0).attr('y',60).attr('width',50).attr('height',50).attr('fill','grey').attr('stroke','darkgrey');
var blueButton = svg.append('rect').attr('x',5).attr('y',66).attr('width',40).attr('height',40).attr('fill','blue');
var blueButton = svg.append('rect').attr('x',5).attr('y',63).attr('width',40).attr('height',40).attr('fill','dodgerblue');
// Button

//Slots
 // É o espaço entre um e outro
//65px é posição inicial multiplicando o valor de i ele vai crir os espaços 
//Na soma do slotWidth +5 o 5 é tamanho da largura do retangulo
for(i=0; i < numDiv; i++) {
    svg.append('rect').attr('x',65+i*(slotWidth+5)).attr('width',5).attr('height',30).attr('fill','silver');

}

/* 15 é o raio do circulo . Ficando a fórmula
 posin + WidthtamRet + (iteração * (tamSlot + WidthtamRet))+ raioCirc */

 redButton.on('click', soltar);
 blueButton.on('click', limpar);

console.log(slot);