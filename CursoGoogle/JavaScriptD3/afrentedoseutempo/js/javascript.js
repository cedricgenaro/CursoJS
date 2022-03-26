var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);

var faceRelogio = svg.append('circle').attr('r', 210).attr('cx', 360).attr('cy', 360).attr('fill', '#fff19f');
var pontHora = svg.append('rect').attr('width', 160).attr('height',15).attr('x' , 360).attr('y', 360).attr('fill', 'darkslategrey');
var pontMinutos = svg.append('rect').attr('width', 15).attr('height', 200).attr('x' , 360).attr('y', 360).attr('fill', '#00000');

pontMinutos.attr('transform', 'rotate(190 360 360)');
pontHora.attr('transform', 'rotate(0 360 360)')

