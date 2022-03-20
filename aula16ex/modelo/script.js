function adiciona() {
    var num = document.getElementById('txtnum')
    var janela = document.getElementById('res')
    var lista = document.getElementById('livalores')
    var valores = document.createElement('option')
    let arrayval = []
    let pesq
    
    //Carregar o Array da lista    
    janela.innerHTML = ""
      for (let c = 0; c < lista.length ; c++ ) {
        arrayval.push(lista[c].value)
     }

     //Verifica se o valor digitado já existe ou se campo está em branco 
     pesq = arrayval.indexOf(num.value)
    
     if(arrayval.indexOf(num.value,0)>-1 || num.value.length==0|| num.value < 1 || num.value > 100){
        window.alert('Valor inválido ou já encontrado na lista!')
    }else{
        valores.text = `Valor ${num.value} adicionado`
        valores.value = Number(num.value)
        lista.appendChild(valores)
        
    }
    
}

/* Carrega meu array da listagem e faz o retorno do mesmo*/
function carregaList(){
    var listagem = document.getElementById('livalores')
    var arrayLista = []
    for (let c=0;c < listagem.length; c++) {
        arrayLista[c] = listagem[c].value
    }
    
    return arrayLista
}

function operacoes(){
    let meuarray = carregaList()
    let resultados = {}
    let tamanho = meuarray.length
    let maior = Math.max.apply(null, meuarray)
    let menor = Math.min.apply(null, meuarray)
    let soma = 0
    let media = 0
    for (const c in meuarray) {
       soma += Number(meuarray[c])
    }
    media = soma  / tamanho
    resultados = {tamnho:`Ao todo temos ${tamanho} números cadastrados`, maior:'O maior valor informado foi '+maior,menor:'O menor valor informado foi ' + menor,soma: 'Somando todos os valores, temos '+ soma, media:'A média dos valores digitados é ' + media}
    
    return resultados
   
}


function finalizar(){
    var totalnumeros = carregaList().length
    var janelares = document.getElementById('res')
      
    var resultados = {}
   if (totalnumeros == 0){
       window.alert('Adicione valores antes de finalizar!')
   }else{
    resultados = operacoes()
    janelares.innerHTML = `<p>${resultados.tamnho}</p>`
    janelares.innerHTML += `<p>${resultados.maior}</p>`
    janelares.innerHTML += `<p>${resultados.menor}</p>`
    janelares.innerHTML += `<p>${resultados.soma}</p>`
    janelares.innerHTML += `<p>${resultados.media}</p>`
   }

   
}