class Aluno {
    constructor(nome, idade, sobrenome) {
        this.nome = nome;
        this.idade = idade;
        this.sobrenome = sobrenome;
    }
    fazerProva(){
        ("O aluno " + this.nome + "esta fazendo prova");
    }
}
const aluno1 = new Aluno("Alison", 30, "Cordeiro");
const aluno2 = new Aluno("Diacui", 71, "Tavares");

console.log(aluno1);
console.log(aluno2);

