function Aluno(aluno1, aluno2) {

let aluno1 = {
    nome: "Julia Fernandes Ferreira", 
    idade: 17,
    cursando: ["TIA", "PDM", "BD1"],
    presenca: ["2023-02-01", "2023-02-02", "2023-02-03", "2023-02-04", "2023-02-05", "2023-02-06", "2023-02-07", "2023-02-08", "2023-02-09", "2023-02-10"],
    ra: "2278025"
}

let aluno2 = {
    nome: "Renata Da Silva", 
    idade: 13,
    cursando: ["PDM", "BD2", "AOS"],
    presenca: ["2023-03-01"],
    ra: "22589000"
}

//VALIDAÇAO DO CADASTRO DO ALUNO 

function validarCadastro (Aluno) { 

function validarNome (nome) {
if (nome.length < 10) {
    console.log("O nome está correto!")
}else{
    console.log("O nome precisa ter no mínimo 10 caracteres!")
}
console.log(Aluno.nome)
}

function validarIdade (idade) {
if ( idade > 14) {
    console.log("A idade está correta!")
}else{
    console.log("a idade é menor que 14!")
}
console.log(Aluno.idade)
}


function validarCursando (cursando) {
if (cursando > 3) {
    console.log("Quantidade de curso correto!")
}else{
    console.log("Cursos insuficientes!")
}
console.log(Aluno.cursando)
}

function validarPresenca (presenca) {
    if (presenca > 2) {
        console.log("Quantidade de presença correta!")
    }else{
        console.log("Muitas faltas!")
    }
    console.log(Aluno.presenca)
    }
    
    function validarRA (ra) {
        if (ra === 7) {
            console.log("RA correto!")
        }else{
            console.log("RA incorreto!")
        }
        console.log(Aluno.ra)
        }

}
}
