var svg = d3.select('body').append('svg').attr('width', 400).attr('height', 400);
var posicao = 15;
var d = 30
//
var grasshopper = svg.append('image');
grasshopper.attr('href', 'https://learn.grasshopper.app/static/webview/grasshopper.png').attr('width', 37).attr('height',37).attr('x', 15).attr('y', 20);

function andar(p){
    grasshopper.transition().delay(d * 15).attr('x', p);
}

function drawBox(color){
    svg.append('rect').transition().delay(d * 15).attr('width', 40).attr('height', 40).attr('fill', color).attr('x', posicao).attr('y', 15);
    posicao += 41;
    andar(posicao);
    d += 30;
}


drawBox('blue');
drawBox('red');
drawBox('blue');
drawBox('pink');

console.log(svg.append());