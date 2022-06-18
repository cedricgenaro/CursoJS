var svg = d3.select('body').append('svg').attr('width', 400).attr('height', 400);

for(var i = 20; i < 400; i+=18) {
    svg.append('rect').attr('width', 1).attr('height', 400).attr('x', i).attr('y', 20).attr('fill', 'slategrey');

    svg.append('rect').attr('width', 400).attr('height', 1).attr('x', 20).attr('y', i).attr('fill', 'slategrey');
}

var  arrayLoc = [
    {
        name: 'escola',
        x:340,
        y:260,
        color: 'red',
    },
    {
        name: 'casa',
        x: 50,
        y:70,
        color: 'blue'
    },
    {
        name: 'igreja',
        x: 100,
        y: 140,
        color: 'yellow'
    },
    {
        name: 'trabalho',
        x: 180,
        y: 30,
        color: 'white'
    }
];

function desenheMapa(x, y, color) {
    let novoPonto = svg.append('circle').attr('r', 8);
    novoPonto.attr('cx', x).attr('cy', y).attr('fill', color);
}

//desenheMapa(arrayLoc[0].x, arrayLoc[0].y, arrayLoc[0].color);
for(var peca of arrayLoc){
    desenheMapa(peca.x, peca.y, peca.color);
}