var svg = d3.select('body').append('svg').attr('width', 400).attr('height', 400);

var cantor = svg.append('g');
var corpo = cantor.append('circle').attr('r', 35).attr('cx', 300).attr('cy',200).attr('fill','yellow');

var olhos = cantor.append('g');
olhos.append('circle').attr('r', 15).attr('cx', 285).attr('cy',175).attr('fill',' white');
olhos.append('circle').attr('r', 8).attr('cx', 285).attr('cy',175).attr('fill',' black');
olhos.append('circle').attr('r', 15).attr('cx', 315).attr('cy',175).attr('fill','white');
olhos.append('circle').attr('r', 8).attr('cx', 315).attr('cy',175).attr('fill',' black');

cantor.attr('transform', 'translate(-215 -100)')


var cortina = svg.append('g');

var cort = cortina.append('rect').attr('fill', 
'orangered').attr('x',0).attr('y',0).attr('height',175).attr('width',200);

var dobras = 10;

for (var i = 0; i < dobras; i++) {
    cortina.append('rect').attr('width', 5).attr('height', 175).attr('fill', 'red').attr('x', i*200/dobras);
}

cortina.append('rect').attr('width',200).attr('height',5).attr('y',175).attr('fill','gold');

//Neste o efeito é bem melhor pois a cortina sobe sem distorcer os elementos
cortina.on('click',()=>{
    cortina.selectAll('rect').filter('[fill=red]').transition().attr('transform','scale(1 0.14286)').duration(1000);
    cortina.selectAll('rect').filter('[fill=gold]').transition().attr('y',25).duration(1000);
    cort.transition().attr('height',25).duration(1000);
});

cantor.on('click', ()=>{
    corpo.transition().attr('fill', 'red').duration(4200);
    cantor.transition().delay(3000).attr('transform', 'translate(-500.0 0.0 )').duration(2000);
    cortina.selectAll('rect').filter('[fill=red]').transition().delay(5000).attr('transform','scale(1 1)').duration(1000);
    cortina.selectAll('rect').filter('[fill=gold]').transition().delay(5000).attr('y',175).duration(1000);
    cort.transition().delay(5000).attr('height',175).duration(1000);
    
});

//Fica tudo expremido e o efeito não fica legal
/* cortina.on('click', ()=>{
    cortina.transition().attr('transform', 'scale(1 0.14)').duration(1000);
}); */

