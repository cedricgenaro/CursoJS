let pictures = [
    foto1 ={
         desc: 'dogTrick',
         data: './img/dogTrick.gif'
 },
 foto2 = {
     desc: 'catStretch',
     data: './img/catStretch.jpg'
 },
 foto3 = {
     desc: 'ducks',
     data: './img/ducks.gif'
 },
 foto4 = {
     desc: 'donkey',
     data: './img/donkey.jpg'
 }
 ];
 
for (let fotos of pictures){
    let img = document.createElement('img');
    let botao = document.createElement('button');
    botao.textContent = 'Clique Aqui!';
    img.src = fotos.data;
    document.body.appendChild(img);
    document.body.appendChild(botao)
}


