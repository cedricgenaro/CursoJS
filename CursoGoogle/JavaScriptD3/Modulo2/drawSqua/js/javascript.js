var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500);

var botao = svg.append('g');
//base botão
var base = botao.append('rect').attr('width', 50).attr('height', 50)
    .attr('x', 350).attr('y', 60).attr('fill', 'rgb(66, 62, 62)')
    .attr('stroke', 'gray');
var baseCima =  botao.append('rect').attr('width', 48).attr('height', 48)
.attr('x', 351).attr('y', 61).attr('fill', 'rgb(66, 62, 62)')
.attr('stroke', 'gray');
var bolinha1 = botao.append('circle').attr('r', 3).attr('fill', 'white')
.attr('cx', 357).attr('cy', 66);
var bolinha2 = botao.append('circle').attr('r', 3).attr('fill', 'white')
.attr('cx', 393).attr('cy', 66);
var bolinha3 = botao.append('circle').attr('r', 3).attr('fill', 'white')
.attr('cx', 393).attr('cy', 102);
var bolinha4 = botao.append('circle').attr('r', 3).attr('fill', 'white')
.attr('cx', 357).attr('cy', 102);

//Botão 
var botbaixo = botao.append('circle').attr('r', 18).attr('fill', 'rgb(114, 2, 2)')
.attr('cx', 376).attr('cy', 85);
var botcima = botao.append('circle').attr('r', 18).attr('fill', 'red')
.attr('cx', 373).attr('cy', 82);

botao.attr('transform', "scale(1.5, 1.5) translate(-100,50)");
let localizacao = 30;
let sizes = [15, 20, 30];
function construirBoneco(){
    for(let element of sizes){
        svg.append('circle').attr('r', element)
            .attr('cx', 180).attr('cy', localizacao)
            .attr('fill', 'white');
        localizacao += element * 2;
    }
}

botcima.on('click', construirBoneco);

