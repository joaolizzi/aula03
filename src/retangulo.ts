class Retangulo {
    constructor(public base: number, public altura: number) {}
    calcularArea() { return this.base * this.altura; }
    calcularPerimetro() { return 2 * (this.base + this.altura); }
}
