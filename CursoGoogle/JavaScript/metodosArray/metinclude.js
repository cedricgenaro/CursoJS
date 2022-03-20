let mercado = ['sal', 'molho', 'macarrao', 'papel', 'arroz', 'feijao'];
let lista = ['molho', 'desinfetante', 'sabonete', 'feijao'];
/* O método includes verifica se o item da lista tem no mercado */
for (let item of lista){
    console.log(`${item} : ${mercado.includes(item)}`);
}
