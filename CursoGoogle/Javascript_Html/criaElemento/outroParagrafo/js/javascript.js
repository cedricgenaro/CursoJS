let novoSubCabecalho = document.createElement('h2'); //Cria o elemento h2
novoSubCabecalho.textContent = 'Novo Sub Cabeçalho';
console.log(novoSubCabecalho.textContent);

let novoParagrafo = document.createElement('p'); // Cria o elemento p
novoParagrafo.textContent = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eos voluptatum consequuntur, maxime facere quo tempore, hic vitae obcaecati a cumque ad voluptate accusamus excepturi, quia fugiat qui saepe! Reiciendis?';
console.log(novoParagrafo.textContent);
/* Aqui adicionamos os nossos novos elementos */
document.body.appendChild(novoSubCabecalho);
document.body.appendChild(novoParagrafo);