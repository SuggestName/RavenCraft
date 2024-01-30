class Item {
    constructor(nome, valorMercado, receita = {}) {
        this.nome = nome;
        this.valorMercado = valorMercado;
        this.receita = receita;
    }

    calcularCustoMaterial(catalogo) {
        let custo = 0;
        for (let nomeItem in this.receita) {
            const quantidade = this.receita[nomeItem];
            const item = catalogo.buscarItem(nomeItem);
            if (item) {
                custo += item.valorMercado * quantidade;
            }
        }
        return custo;
    }
}
