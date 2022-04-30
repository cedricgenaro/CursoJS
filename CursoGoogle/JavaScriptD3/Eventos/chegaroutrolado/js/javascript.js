
var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 600);
var chao1 = svg.append('rect').attr('width', 500).attr('height', 30).attr('fill', 'green');
var chao2 = svg.append('rect').attr('width', 500).attr('height', 100).attr('y', 180).attr('fill', 'green');
var chicken = svg.append("circle").attr('r', 15).attr('cx', 250).attr('cy', 165 ).attr('fill', 'lightyellow');
var carro1 = svg.append('rect').attr('width', 75).attr('height', 20).attr('fill', 'blue').attr('x', 250).attr('y', 30);
var carro2 = svg.append('rect').attr('width', 100).attr('height', 50).attr('fill', 'red').attr('x', -100).attr('y', 65);
var carro3 = svg.append('rect').attr('width', 150).attr('height', 65).attr('fill', 'white').attr('x', 550).attr('y', 110);

function startTraffic(){
    carro1.transition().duration(4200).attr('x', -175);
    carro2.transition().duration(2200).attr('x', 555);
    carro3.transition().duration(4200).attr('x', -175);

}
function atravessar(){
    startTraffic();
    chicken.transition().duration(3000).attr('cy', 10);
}
chicken.on('click', atravessar);


