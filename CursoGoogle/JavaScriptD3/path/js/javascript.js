
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);

function aleatorio(){
   var pos = Math.random(1,600)* 500
   return pos;
} 
function sumir() {
    contafinal.remove();
}

function cura() {
    bacterias.remove();
}


function mult() {
    for (var i = 0; i <= 50; i++){
        svg.append('circle').attr('cx', aleatorio).attr('cy', aleatorio).attr('r', 1).attr('fill', 'yellowgreen');
    }
}
mult();
aleatorio()
svg.selectAll('circle').append('animate').attr('attributeName', 'r').attr('values', '0;100;100').attr('dur', '60s');
var contagotas = svg.append('g')



var liq = svg.select('g').append('path').attr('d','M 12,48 C12,50 10,52 10,60 L8,60 C8,52 6,50 6,48Z').attr('fill', 'yellowgreen').attr('opacity', 1.0);
var frasco = svg.select('g').append('path').attr('d','M6,12 C6,0 12,0 12,12 C14,12 14,18 12,18 L12,48 C12,50 10,52 10,60 L8,60 C8,52 6,50 6,48 L6,18 C4,18 4,12 6,12 Z').attr('fill', 'silver').attr('stroke', 'GREY').attr('stroke-width', 0,2).attr('opacity', 0.5);

var cabeca = svg.select('g').append('path').attr('d','M6,12 C6,0 12,0 12,12 C14,12 14,18 12,18 L6,18 C4,18 4,12 6,12 Z').attr('stroke', 'GREY').attr('stroke-width', 0,2);
contagotas.attr('transform', 'scale(4) translate(30 25) rotate(-45 0 0)');

var bacterias = svg.selectAll('circle');
var contafinal = svg.select('g');

contafinal.on('click', sumir);
bacterias.on('click', cura);

/* contagotas.append('animateTransform').attr('attributeName', 'transform').attr('type', 'scale').attr('from', '0').attr('to', 50).attr('dur', '60s'); */
//contafinal.append('animateTransform').attr('attributeName', 'transform').attr('type', 'rotate').attr('from', '0 0 0').attr('to', '-45 0 0').attr('dur', '10s');
/* svg.select('g').append('animateTransform').attr('attributeName', 'transform').attr('type', 'scale').attr('from', '3').attr('to', 50).attr('dur', '6s');
 */
console.log(bacterias.attr('fill'));