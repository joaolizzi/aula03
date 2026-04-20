class Pessoa {
    constructor(public nome: string, public idade: number) {}
    apresentar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}
