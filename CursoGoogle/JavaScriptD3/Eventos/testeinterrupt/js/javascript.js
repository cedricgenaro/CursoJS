var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);
var face = svg.append('path').attr('d','M0 258.39C40.79 190.51 73.36 239.28 83.23 209.29C76.1 189.5 75.03 187.48 87.11 183.25C90.98 178.73 88.07 176.13 84.52 170.3C85.78 165.89 88.17 164.27 84.52 159.95C75.48 159.3 74.35 160.48 72.9 155.81C71.17 146.88 79.52 147.79 83.23 133.87C68.87 127.69 56.45 120.93 52.26 109.8C73.59 77.64 46.23 120.44 47.74 97.1C49.27 83.82 47.67 68.23 42.96 50.33C36.01 35.95 22.34 22.5 1.94 10');

face.attr('transform','translate(0 -30)').attr('stroke','plum');

var bola = svg.append('circle')
    .attr('r', 30)
    .attr('cx', 115)
    .attr('cy', 140)
    .attr('fill', 'pink');

function rosto() {
    bola.interrupt(); // Interrompe a 2ª animação
    bola.attr('r', 15).attr('cx', 100);
}

function bolainfla() {
    bola.interrupt(); //Esse interrupt interrompe a primeira animação que está reduzindo a bola e aciona a 2ª
    /* 2ª animação a de inflar a bola */
    bola.transition().attr('r', 500).attr('cx', 585).duration(10000).ease(d3.easeSinOut);
}

/* 1ª Animação */
bola.transition()
    .attr('r', 15).duration(10000).attr('cx', 100).ease(d3.easeSinOut);

face.on('click', bolainfla);
bola.on('click', rosto);