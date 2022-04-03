
var color = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);


var circle = svg.append("circle").attr('r', 150).attr('cx', 300).attr('cy', 300);
circle.on('click', changeColor);