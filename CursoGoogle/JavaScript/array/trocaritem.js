let shapes = ['triangulo','quadrado','pentagono', 'circulo'];

function trocarForma(lista, forma){
    let indiceUlt = lista.length - 1;
    lista[indiceUlt] = forma;
}

trocarForma(shapes, 'hexagono');

for (let element of shapes){
    console.log(element);
}

