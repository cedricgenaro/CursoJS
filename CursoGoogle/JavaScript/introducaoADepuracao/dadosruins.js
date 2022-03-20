let produtos = ['Arroz', 'Feijão', '', 'maçã', 'pimentão'];

function getTamanho(lista) {
    for (let item of lista) {
        console.log(item.length + ' Letras');
        console.log(item);
    }
}

getTamanho(produtos);