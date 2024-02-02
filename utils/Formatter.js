class Formatter {
    static formatCurrency(value) {
        return value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    static formatNumber(value) {
        return new Intl.NumberFormat('pt-BR').format(value);
    }
}
