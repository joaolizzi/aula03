class Lampada {
    private ligada: boolean = false;

    ligar() { this.ligada = true; }
    desligar() { this.ligada = false; }
    estaLigada() { return this.ligada; }
}
