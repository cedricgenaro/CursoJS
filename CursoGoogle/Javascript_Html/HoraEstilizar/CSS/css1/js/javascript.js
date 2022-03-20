var animais = [
    ['Edgar the Cat', './img/catOnTower.jpg','Enjoys adventures'],
    ['Summer the Dog','./img/dogTrick.gif', 'Loves chasing tail' ],
    ['Llarry the Llama', './img/llama.jpg', 'Likes snacks and cuddles']
]

let title = document.createElement('h1');
title.textContent = 'Animais Adotáveis';
document.body.appendChild(title);

for (let elemento of animais){
    let animal = document.createElement('h2');
    animal.textContent = elemento[0];
    document.body.appendChild(animal);

    let fotos = document.createElement('img');
    fotos.src = elemento[1];
    document.body.appendChild(fotos);

    let desc = document.createElement('p');
    desc.textContent = elemento[2];
    document.body.appendChild(desc);

    let botao = document.createElement('button');
    botao.textContent = 'Like';
    document.body.appendChild(botao);
    botao.addEventListener('click', () => {
        if (botao.textContent === 'Like'){
            botao.textContent = 'Liked!';
        }else {
            botao.textContent = 'Like';
        }
    });
}


