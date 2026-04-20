class Saudacao {
    exibir(nome: string): void;
    exibir(nome: string, titulo: string): void;
    exibir(nome: string, titulo?: string): void {
        if(titulo) console.log(`${titulo} ${nome}`);
        else console.log(nome);
    }
}
