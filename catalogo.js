class Catalogo {
    constructor() {
        this.itens = {};
    }

    add(tipo, nome, valorMercado, receita = {}) {
        if (!this.itens[tipo]) {
            this.itens[tipo] = {};
        }
        this.itens[tipo][nome] = new Item(nome, valorMercado, receita);
    }

    buscarItem(nome) {
        for (let tipo in this.itens) {
            if (this.itens[tipo][nome]) {
                return this.itens[tipo][nome];
            }
        }
        return null;
    }
}
