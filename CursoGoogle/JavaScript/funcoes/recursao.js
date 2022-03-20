var texto = 'Hoje será um dia que vai ter muito sol. Amanhã também irá ter muito sol.';

/* Função que localiza a uma palavra dentro de um texto */
function locESubst(string, vpalavra, npalavra) {
    /* Esse if é a condição para sair do loop da chamda da mesma função (recursão) ele verifica se tal palavra tem dentro do texto o retorno do texto já substituido a palavra velha pela nova */
    if (string.includes(vpalavra) === false) {
        return string;
    }
    /*A qui entra a recursão estamos chamando a própia função pois o teste do if deu negativo então a função substitui a palavra velha pela nova e chama a ela mesma para continuar verificando */
    string = string.replace(vpalavra, npalavra);
    return locESubst(string, vpalavra, npalavra);
}

console.log(texto)
console.log(locESubst(texto, 'sol', 'chuva'));

