let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */

/* for(let passo =0; passo < valores.length; passo++){
    console.log(`A posição ${passo} tem o valor ${valores[passo]}`)
}  */

/* for (let pos in valores) {
    console.log(`${valores[pos]}`)
} */
console.log(num)

let pos = num.indexOf(4)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
