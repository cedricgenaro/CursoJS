function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resultado')
    var cont = document.querySelector('p#contagem')
    cont.innerHTML = ""
    /* Verifica se há algum campo vazio */
    if (ini.value.length==0||fim.value.length==0||passo.value.length==0){
        res.innerHTML = "Impossivel contar!"
    }else if(Number(ini.value) < Number(fim.value)){ 
        /* Verifica se o passo é igual a zero e converte para 1 */
        if(passo.value==0){
            window.alert('Passo inválido! Considerando Passo 1')
            passo.value = 1
        }
        var inicio = Number(ini.value)
        var fimcont = Number(fim.value)
        var passocont = Number(passo.value)
        
        /* Gera a contagem crescente */
        res.innerHTML = 'Contando:'
        for(var c=inicio ; c <= fimcont; c+=passocont){
            if (c==inicio){
              cont.innerHTML += c  
            }else{
              cont.innerHTML += `&#x1F449; ${c}`
            }
           
        }
        cont.innerHTML += "&#x1F449; &#x1F3C1;"
        /* Testa se inicio é maior que o fim, se for gera contagem decrescente */
    }else if(Number(ini.value) > Number(fim.value)){
        var inicio = Number(ini.value)
        var fimcont = Number(fim.value)
        var passocont = Number(passo.value)
        window.alert("Inicio maior que fim, fazendo contagem decrescente!")
        res.innerHTML = 'Contando:'
        for(var c=inicio ; c >= fimcont; c-=passocont){
            if (c==inicio){
                cont.innerHTML += c  
              }else{
                cont.innerHTML += `&#x1F449; ${c}`
              }
        }
        cont.innerHTML += "&#x1F449; &#x1F3C1;"
    }
}