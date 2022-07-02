var svg = d3.select('body').append('svg').attr('width', window.innerWidth).attr('height', 400);

var corda = svg.append('rect').attr('width', 2).attr('height', 10).attr('fill', 'white').attr('y', 72).attr('x', 0);

var distancia = 0;

var robo = svg.append('g');

var pes = [
    robo.append('rect').attr('width', 80).attr('height', 40).attr('x', 0).attr('y', 10).attr('fill', 'lightseagreen'), 
    robo.append('rect').attr('width', 80).attr('height', 40).attr('x', 0).attr('y', 110).attr('fill', 'teal')
];

var corpo = robo.append('circle').attr('r', 40).attr('cx', 0).attr('cy', 80).attr('fill', 'mediumturquoise');

function pickFoot(arr){
    let pe = arr[Math.floor(Math.random() * arr.length)];
    return pe;
}


corpo.on('click', () => {
    
    pickFoot(pes).transition().attr('x', distancia);
    corpo.transition().attr('cx', distancia);
    corda.attr('width', distancia);
    console.log(distancia);
    distancia += 15;
    
});

corda.on('click', () => {
    corda.transition().attr('width', 0);
    for(let i = 0; i < pes.length; i++) {
        pes[i].transition().attr('x', 0);
    }
    corpo.transition().attr('cx', 0);
    distancia = 0;

    
    
});

console.log(distancia);