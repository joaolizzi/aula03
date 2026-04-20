class ContaCorrente {
    constructor(public titular: string, private saldo: number) {}

    depositar(valor: number) {
        if(valor > 0) this.saldo += valor;
    }

    sacar(valor: number) {
        if(valor > 0 && valor <= this.saldo) this.saldo -= valor;
    }

    consultarSaldo() { return this.saldo; }
    exibirDados() { console.log(this.titular, this.saldo); }
}
