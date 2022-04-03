var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500);

var olhoesquerdo = svg.append('circle')
                        .attr('r', 80)
                        .attr('cx', 150)
                        .attr('cy', 160)
                        .attr('fill', 'white');
var olhodireito = svg.append('circle')
                        .attr('r', 80)
                        .attr('cx', 315)
                        .attr('cy', 160)
                        .attr('fill', 'white');
var pupilaesquerda = svg.append('circle')
                        .attr('r', 30)
                        .attr('cx', 108)
                        .attr('cy', 160)
                        .attr('fill', 'black');
var pupiladireita = svg.append('circle')   
                        .attr('r', 30)
                        .attr('cx', 275)
                        .attr('cy', 160)
                        .attr('fill', 'black');
