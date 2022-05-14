
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);

var shape = svg.append('circle')
    .attr('fill', 'red').attr('r', 120)
    .attr('cx', 200).attr('cy',200)
    .transition()
    .duration(5000)
    .attr('fill', 'blue')
    .transition()
    .delay(2000)
    .attr('r', 2000)
    .remove();