let verde = 'img/farolverde.png';
let amarelo = 'img/farolamarelo.png';
let vermelho = 'img/farolvermelho.png';
let img = document.getElementById('imgbox');
let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');

bt1.addEventListener('click', () =>{
    img.src = amarelo;
});

bt2.addEventListener('click', () => {
    img.src = vermelho;
});

bt3.addEventListener('click', () => {
    img.src = verde;
})