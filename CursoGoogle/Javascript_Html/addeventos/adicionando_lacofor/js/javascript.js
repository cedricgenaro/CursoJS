/* var animais = [cao1 = {
    nome:'Clifford',
  foto:'./img/labrador.jpg',
   descr:'The big red dog'},
   cao2 = {
    nome:'Snoppy',
    foto:'./img/puppy.jpg',
    descr:'The good dog'
   }
]; */

var animais = [['Clifford','./img/labrador.jpg', 'The big red dog'], 
['Snoppy','./img/puppy.jpg','The good dog']];

let titulo = document.createElement('h1');
document.body.appendChild(titulo);
titulo.textContent = 'Cute Animals';

for (let animal of animais ){
    let name = document.createElement('h2');
    name.textContent = animal[0]
    let img = document.createElement('img');
    img.src = animal[1];
    let desc = document.createElement('p');
    desc.textContent = animal[2];
    document.body.appendChild(name);
    document.body.appendChild(img);
    document.body.appendChild(desc);
}


