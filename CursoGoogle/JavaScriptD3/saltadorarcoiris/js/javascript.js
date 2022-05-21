
var color = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var l = 30;
var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);
var grasshopper = svg.append('g');
var myColor = d3.rgb(115, 255, 115);

//Add parts to group
var head = grasshopper.append('path').attr('fill',myColor).attr('d','M761.15,157.3H730.21c0-34.59,8.18-68.32,22.31-99.37,6.51-14.31-4.16-30.55-19.88-30.55a21.86,21.86,0,0,0-19,11.09A239.76,239.76,0,0,0,681.89,157.3h0A216.16,216.16,0,0,0,818.08,358.12l10.4,4.14V224.63A67.33,67.33,0,0,0,761.15,157.3Z');
head.attr('transform', 'translate(-15 0) scale(0.05)');

var body = grasshopper.append('path').attr('fill',myColor).attr('d','M501.2,92.5,339,27.38c0,52.43,24.29,110.07,45.28,129.92H171.11c20.5,112.51,165,205,308.15,205h0L410.6,431c-15.37,15.37-4.49,41.65,17.25,41.65h0a24.4,24.4,0,0,0,17.25-7.15L548,362.62l1.29.53v84.25c0,13.44,10.51,25,23.94,25.21A24.4,24.4,0,0,0,598,448.22v-86h48.8v85.14c0,13.43,10.51,25,23.94,25.21a24.4,24.4,0,0,0,24.86-24.4v-86h0C695.65,239.87,622,142,501.2,92.5Z');
body.attr('transform', 'translate(-15 0) scale(0.05)');

//Initial Location
grasshopper.attr('transform','translate(10 20)');

var x = 0;

function jump(){
    grasshopper.transition()
    .delay(x*500/30) // fica 500 pois cada quadrado tem um  atraso de 17 seg * 30 = 500/30px por seg  Logo fica x * 500/30 

    .attr('transform','translate('+(x+=15)+' 10)') // O grilo sai da posição 10 em x vai inicialmente para 15 que é o meio do quadrado  sai do 20 em y e vai para 10 iniciando o salto
    .transition()
    // vai somando 15 ao x para ir para frente e termina em 20 na posição y que deixa ele bem em cima do quadrado
    .attr('transform','translate('+(x+=15)+' 20)');
    //Isso faz com que assim que ele salta já aparece o quadrado.
}


function pickRandom(paleta){
let corfinal = '#'
   for (let i=0; i <= 5; i++) {
        let cores = Math.floor(Math.random() * (paleta.length-1));
        corfinal += paleta[cores];
   }
    return corfinal;
}

function changeColor() {
    return circle .attr('fill', pickRandom(color));
}



function drawSquare(q) {
    var y = 50;
    for(var i = 0; i <= q + 1; i++) {
         svg.append('rect').transition()
        .delay(17 * l)
        .attr('width', 30)
        .attr('height', 30)
        .attr('y', y)
        .attr('x', l)
        .attr('fill', pickRandom(color));
        jump();    
        l += 30;   
    }
    
}

drawSquare(27);
/* drawSquare(pickRandom(color));
drawSquare(pickRandom(color));
drawSquare(pickRandom(color));
drawSquare(pickRandom(color));
drawSquare(pickRandom(color));
drawSquare(pickRandom(color));

 */

