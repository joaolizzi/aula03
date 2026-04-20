class Usuario {
    constructor(public nome: string) {}

    static criarVisitante() {
        return new Usuario("Visitante");
    }
}