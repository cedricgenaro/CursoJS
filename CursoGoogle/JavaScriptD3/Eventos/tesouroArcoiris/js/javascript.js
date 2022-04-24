
var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 600);
const cores = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet'];
var primeiro = ""

function colocaOunao(array) {
    var resp = array[Math.floor(Math.random() * array.length)];
    return resp;
}

function primeiroCirculo(){
    primeiro.transition().attr('fill', 'gold')
}

function mult(cor) {
    var p = 0
    for (var c = 0; c < 8; c++){
        
         svg.append('circle').attr('r', 35).attr('cx', 185).attr('cy',300).attr('fill', cor[c]).transition().duration(5000).attr('transform', `rotate(${p} 250 300)`)
         
         p += 26
     }
    
}
mult(cores);

primeiro = svg.select('circle');
primeiro.on('click', primeiroCirculo);