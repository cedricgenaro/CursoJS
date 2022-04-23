
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);

var int1 =  svg.append('rect').attr('width', 40).attr('height', 70).attr('fill', 'white').attr('x', 50).attr('y', 30).attr('stroke', 'grey');

var int2 = svg.append('rect').attr('width', 30).attr('height', 60).attr('fill', 'lightgrey').attr('x', 55).attr('y', 35);

var bt1 = svg.append('rect').attr('width', 30).attr('height', 30).attr('fill', 'grey').attr('x', 55).attr('y', 65);

var fio = svg.append('rect').attr('width', 2).attr('height', 100).attr('fill', 'grey').attr('x', 180);

var bocal1 = svg.append('rect').attr('width', 30).attr('height',5).attr('fill', 'white').attr('stroke', 'grey').attr('x', 50).attr('y', 100).attr('x', 165);

var bocal2 = svg.append('rect').attr('width', 30).attr('height',5).attr('fill', 'white').attr('stroke', 'grey').attr('x', 50).attr('y', 107).attr('x', 165);

var bocal3 = svg.append('rect').attr('width', 30).attr('height',5).attr('fill', 'white').attr('stroke', 'grey').attr('x', 50).attr('y', 114).attr('x', 165);

var lamp = svg.append('circle').attr('r',30).attr('cx', 180).attr('cy', 152);
function acender() {
  bt1.attr('y', 35);
  lamp.attr('fill', 'yellow');
}

function apagar() {
  bt1.attr('y', 65);
  lamp.transition().duration(1000).attr('fill', 'black');
}

bt1.on('click', acender);
int2.on('click', apagar);