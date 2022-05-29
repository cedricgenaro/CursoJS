var svg = d3.select('body').append('svg').attr('width', 800).attr('height', 800);

var agua = svg.append('rect').attr('width', 800).attr('height', 750).attr('fill', 'rgba(0, 191, 255,1)').attr('y', 120)



var corda = svg.append('rect').attr('width', 8).attr('height',650).attr('fill', 'rgba(128, 128, 128,0.7)').attr('x', 300).attr('y', 320);
var boia = svg.append('circle').attr('r', 30).attr('cx',300).attr('cy',290).attr('fill', 'rgba(255,255,255,0.6)');

function cortarCorda(){
    corda.remove();
    var agua2 = svg.append('rect').attr('width', 800).attr('height', 750).attr('fill', 'rgba(0, 191, 255,0.4)').attr('y', 120);
    boia.attr('fill', 'white');
    boia.transition().duration(5000).attr('cy',110).ease(d3.easeElastic);
}

corda.on('click', cortarCorda);