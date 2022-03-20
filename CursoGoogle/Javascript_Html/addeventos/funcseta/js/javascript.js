var dog = ['Clifford',
  './img/labrador.jpg',
   'The big red dog'
];
let titulo = document.createElement('h1');
titulo.textContent = 'Pet do Mês';

let dogName = document.createElement('h2');
dogName.textContent = dog[0];

let img = document.createElement('img');
img.src = dog[1];

let descricao = document.createElement('p');
descricao.textContent = dog[2];

let button = document.createElement('button');
button.textContent = 'Vote';
button.addEventListener('click', () => {
    button.textContent = 'Votado!'
});
button.addEventListener('dblclick', () => {
    button.textContent = 'Vote'
});

document.body.appendChild(titulo);
document.body.appendChild(dogName);
document.body.appendChild(img);
document.body.appendChild(descricao);
document.body.appendChild(button);


