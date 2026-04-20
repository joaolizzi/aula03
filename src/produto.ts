class Produto {
    constructor(public nome: string, public preco: number, public estoque: number) {}

    adicionarEstoque(qtd: number) { this.estoque += qtd; }
    removerEstoque(qtd: number) { this.estoque -= qtd; }
    exibirProduto() { console.log(this); }
}