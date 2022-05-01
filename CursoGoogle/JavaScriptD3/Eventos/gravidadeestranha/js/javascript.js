var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 600);
var chao1 = svg.append('rect').attr('width', 500).attr('height', 30).attr('fill', 'gray').attr('y', 570);
var bolaazul = svg.append('circle').attr('fill','aqua').attr('r',25).attr('cx',100).attr('cy', 30);
var verde = svg.append('circle').attr('fill','limegreen').attr('stroke','lime').attr('stroke-width',3).attr('r',25).attr('cx',175).attr('cy',30);

function cair(){
    verde.transition()
        .duration(2000)
        .attr('cy', 545)
        .ease(d3.easeBounceOut);
    
    bolaazul.transition()
        .attr('cy', 545)
        .ease(d3.easeQuadIn);
        
}

svg.selectAll('circle')
    .on('click', cair);

