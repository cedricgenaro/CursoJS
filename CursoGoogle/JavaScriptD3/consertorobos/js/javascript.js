var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);

var cabeca = svg.append('rect').attr('width', 150).attr('height', 100).attr('fill', 'gray');
var olhoEsq = svg.append('circle').attr('r', 27).attr('fill', 'yellow');
var olhoDireito = svg.append('circle').attr('r', 27).attr('fill', 'yellow');
var pescoco = svg.append('rect').attr('width', 40).attr('height', 40).attr('fill', '#ffffff');
var corpo = svg.append('rect').attr('width', 186).attr('height', 200).attr('fill', 'gray');
var peEsq = svg.append('rect').attr('width', 30).attr('height', 30).attr('fill', '#ffffff');
var peDireito = svg.append('rect').attr('width', 30).attr('height', 30).attr('fill', '#ffffff');
var bracoDireito = svg.append('rect').attr('width', 100).attr('height', 15).attr('fill', '#ffffff');
var bracoEsq = svg.append('rect').attr('width', 100).attr('height', 15).attr('fill', '#ffffff');
var color = ['blue', 'red', 'green', '#ff0066'];
function pickRandom(cor){
    return cor[Math.floor(Math.random() * cor.length)];
}
cabeca.attr('x', 250).attr('y', 200);
pescoco.attr('x', 305).attr('y', 300);
corpo.attr('x', 235).attr('y', 340);
olhoEsq.attr('cx', 290).attr('cy', 238);
olhoDireito.attr('cx', 360).attr('cy', 238);
peDireito.attr('x', 275).attr('y', 540);
peEsq.attr('x', 355).attr('y', 540);
bracoEsq.attr('x', 135).attr('y', 380 );
bracoDireito.attr('x', 421).attr('y', 380);
olhoEsq.on('click', () => {bracoDireito.attr('fill', pickRandom(color))})
