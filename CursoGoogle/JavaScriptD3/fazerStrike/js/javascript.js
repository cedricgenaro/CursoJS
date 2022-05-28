
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);
var pista = svg.append('rect').attr('width', 200).attr('height', 600).attr('fill','tan').attr('x', 200);
var listra1 = svg.append('rect').attr('fill', 'red').attr('width',6).attr('height',600).attr('x', 215);
var listra2 = svg.append('rect').attr('fill', 'red').attr('width', 6).attr('height',600).attr('x',380);

//Linha1 Pinos
var pin1 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 300).attr('cy', 150);
//Linha2 Pinos
var pin2 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 285).attr('cy', 120); 
var pin3 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 315).attr('cy', 120); 
//Linha3 Pinos
var pin4 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 300).attr('cy', 90); 
var pin5 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 268).attr('cy', 90); 
var pin6 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 332).attr('cy', 90); 
//Linha4 Pinos
var pin7 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 285).attr('cy', 55);
var pin8 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 250).attr('cy', 55);
var pin9 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 320).attr('cy', 55);
var pin10 = svg.append('circle').attr('fill', 'white').attr('r', 10).attr('cx', 350).attr('cy', 55);
//bola
var bol = svg.append('circle').attr('fill', 'blue').attr('r', 20).attr('cx', 300).attr('cy', 355);

//funções
function cairPinos(){
  pin1.transition().delay(800).remove();

  pin2.transition().delay(875).remove();
  pin3.transition().delay(875).remove();

  pin4.transition().delay(950).remove();
  pin5.transition().delay(950).remove();
  pin6.transition().delay(950).remove();

  pin7.transition().delay(1025).remove();
  pin8.transition().delay(1025).remove();
  pin9.transition().delay(1025).remove();
  pin10.transition().delay(1025).remove();
}

function rolarBola(){
  bol.transition().attr('cy',0).duration(2000);
  cairPinos();
}

bol.on('click', rolarBola);
//600 tamanho da area - tamanho da largura do objeto 350 que dá 250 e divide por 2 que é o meio metade

//Ou podemos pegar o tamanho da largura do objeto 350 e dividir por 2 e fazer a diferença entre o tamanho da largura do palco (svg) que dá 125


