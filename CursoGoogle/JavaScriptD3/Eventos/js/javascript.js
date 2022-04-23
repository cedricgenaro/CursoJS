
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);
const cores = ['rgb(165,220,275)', 'rgb(150,200,250)', 'rgb(135,180,225)', 'rgb(120,160,200)', 'rgb(105,140,175)', 'rgb(90, 120, 150)', 'rgb(75, 100, 125)'];


function aleatorio(max, mult){
   var pos = Math.random(1,max)* mult;
   return pos;
} 

function seletorCores(cor){
    var corsel = cor[Math.floor(Math.random()*cor.length)];
    console.log(corsel);
    return corsel;
}

seletorCores(cores);



function mult() {
    for (var i = 0; i <= 20; i++){
        svg.append('circle').attr('cx', aleatorio(100, 500)).attr('cy', aleatorio(100, 500)).attr('r', aleatorio(60, 60)).attr('fill', seletorCores(cores));
    }
}
mult();
const circles = svg.selectAll('circle');

function moveCircles(){
    circles.transition().attr('cx', 155).transition().attr('cy', 155).transition().attr('r', 35);
}

circles.on('click', moveCircles);

