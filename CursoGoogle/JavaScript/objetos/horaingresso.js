let estudantes = [
    aluno1 = {
        name: 'Paulo',
        idade: 6
    }, aluno2 =  {
        name: 'Jéssica',
        idade: 13
    }, aluno3 = {
        name: 'João',
        idade: 5
    }, aluno4 = {
        name: 'Maria',
        idade: 9
    }, aluno5 = {
        name: 'Pedro',
        idade: 14
    }
];

function alunosMaiores(lista){
    for(var aluno of lista){
        if (aluno['idade'] < 12){
            console.log(aluno['name']);
        }
    }
}

alunosMaiores(estudantes);