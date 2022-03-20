function geraTab(){
    
    var numero = document.querySelector('input#num')
    var cont = 1
    var resultado = 0
    var selector = document.getElementById('tab')
   
   
    if (numero.value.length==0){
        window.alert('Por favor digite um número!')
    }else{
        selector.innerHTML = ""
        
        
        while(cont <= 10){
            resultado = Number(numero.value)*cont
          selector.innerHTML += `<option>${numero.value} x ${cont} = ${resultado}</option>`
            cont++ 
            
        }
        
    }
}