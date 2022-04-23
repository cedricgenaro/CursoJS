
var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 600);
const cores = ['rgb(165,220,275)', 'rgb(150,200,250)', 'rgb(135,180,225)', 'rgb(120,160,200)', 'rgb(105,140,175)', 'rgb(90, 120, 150)', 'rgb(75, 100, 125)'];
const g = svg.append('g');
const decide = ['sim', 'não'];

function colocaOunao(array) {
    var resp = array[Math.floor(Math.random() * array.length)];
    return resp;
}
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

function hideRect() {
    rectangles.transition().attr('width', 0).attr('height', 0);
}

function mult() {
    for(var l = 39.2; l < 580; l+=42){
        for (var c = 14.60; c <= 500; c+=18){
            var res = colocaOunao(decide);
            if(res == 'sim'){
                g.append('rect').attr('width', 14.60 ).attr('height', 39.2).attr('fill', seletorCores(cores)).attr('x', c).attr('y', l).attr('stroke', 'lightblue');
            }
             
         }
    }
}
mult();

var rectangles = svg.selectAll('rect');
rectangles.on('click', hideRect);
