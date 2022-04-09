
var svg = d3.select('body').append('svg').attr('width', 600).attr('height', 500);
var balloon = svg.append('circle').attr('fill', '#ff0000').attr('r', 50).attr('cx', 350).attr('cy', 250);

function pickRandom(max){
  return  Math.random() * (max - 50) + 50;
}

function randomSize() {
    balloon.attr('r', pickRandom(200));
}

balloon.on('click', randomSize);

