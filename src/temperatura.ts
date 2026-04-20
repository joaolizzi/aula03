class Temperatura {
    private _celsius: number = 0;

    get celsius() { return this._celsius; }
    set celsius(valor: number) {
        if(valor >= -273.15) this._celsius = valor;
    }
}
