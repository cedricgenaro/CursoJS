var svg = d3.select('body').append('svg').attr('width', 400).attr('height', 500);

var position = [];


if(position.length == 0) {

    for(let i = 35; i <= 400 - 35; i+=5) {
        
        position.push(i);
    }
}

function pickPosition(arr){
    let posicao = arr[Math.floor(Math.random() * arr.length)];
    return posicao;
}



var chao = svg.append('rect').attr('width', window.innerWidth).attr('height', window.innerHeight - 200).attr('fill', 'silver').attr('y', 190 + 35);

let bol = svg.append('circle').attr('r', 35).attr('cx', pickPosition(position) ).attr('cy', 35).attr('fill', 'red');

 bol.on('click', () => {
    bol.interrupt().attr('cy', 35);
    bol.attr('cx', pickPosition(position));
    bol.transition().duration(2000).attr('cy', 190);
 });

 