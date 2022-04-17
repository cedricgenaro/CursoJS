
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);


var contagotas = svg.append('g')



var liq = svg.select('g').append('path').attr('d','M 12,48 C12,50 10,52 10,60 L8,60 C8,52 6,50 6,48Z').attr('fill', 'yellowgreen').attr('opacity', 1.0);
var frasco = svg.select('g').append('path').attr('d','M6,12 C6,0 12,0 12,12 C14,12 14,18 12,18 L12,48 C12,50 10,52 10,60 L8,60 C8,52 6,50 6,48 L6,18 C4,18 4,12 6,12 Z').attr('fill', 'silver').attr('stroke', 'GREY').attr('stroke-width', 0,2).attr('opacity', 0.5);

var cabeca = svg.select('g').append('path').attr('d','M6,12 C6,0 12,0 12,12 C14,12 14,18 12,18 L6,18 C4,18 4,12 6,12 Z').attr('stroke', 'GREY').attr('stroke-width', 0,2);

var contafinal = contagotas.attr('transform', 'scale(3) translate(30 15) rotate(-45 0 0)');
/* contagotas.append('animateTransform').attr('attributeName', 'transform').attr('type', 'scale').attr('from', '0').attr('to', 50).attr('dur', '60s'); */
//contafinal.append('animateTransform').attr('attributeName', 'transform').attr('type', 'rotate').attr('from', '0 0 0').attr('to', '-45 0 0').attr('dur', '10s');
svg.select('g').append('animateTransform').attr('attributeName', 'transform').attr('type', 'scale').attr('from', '3').attr('to', 50).attr('dur', '6s');

/* <path d="M 12 48 C 12 50 10 52 10 60 L 8 60 C8 52 6 50 6 48 Z" fill="yellowgreen" opacity="1"></path> */