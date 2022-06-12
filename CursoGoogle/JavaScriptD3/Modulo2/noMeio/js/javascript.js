var svg = d3.select('body').append('svg').attr('width', window.innerWidth).attr('height', window.innerHeight-37);

let position = [];

for(var i = 15; i < window.innerWidth; i+=30) {
    position.push(i);
}

function pickRandom(arr){
    let res = arr[Math.floor(Math.random() * (arr.length -1))];
    return res;
}

function alerta(){
   svg.select('circle').remove();
}

for (var i = 0; i < window.innerWidth; i++) {
    svg.append('circle').attr('r', 15).attr('cx', pickRandom(position)).attr('cy', pickRandom(position)).attr('fill','green');
    svg.append('circle').attr('r', 15).attr('cx', pickRandom(position)).attr('cy', pickRandom(position)).attr('fill','dodgerblue');

    svg.append('circle').attr('r', 10).attr('cx', pickRandom(position)).attr('cy', pickRandom(position)).attr('fill', 'white');
    svg.append('circle').attr('r', 5).attr('cx', pickRandom(position)).attr('cy', pickRandom(position)).attr('fill', 'lime');
}

svg.selectAll('circle').on('mousemove', alerta);