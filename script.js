function calcularMateriasPrimas(nomeItem, quantidade, catalogo) {
    let resultado = {};

    function adicionarQuantidade(material, qtd) {
        resultado[material] = (resultado[material] || 0) + qtd;
    }

    function processarItem(nomeItem, qtd) {
        const item = catalogo.buscarItem(nomeItem);
        if (item && Object.keys(item.receita).length > 0) {
            for (let subitem in item.receita) {
                processarItem(subitem, item.receita[subitem] * qtd);
            }
        } else {
            adicionarQuantidade(nomeItem, qtd);
        }
    }

    processarItem(nomeItem, quantidade);
    return resultado;
}

function imprimirPrecoTotal(nomeItem, quantidade, catalogo) {
    let materiasPrimas = calcularMateriasPrimas(nomeItem, quantidade, catalogo);
    let custoMateriasPrimas = 0;
    let custoFabricacao = 0;

    let output = `${nomeItem} x${quantidade} - Resumo de Custos:\n`;
    output += "Custo das Matérias-Primas (Itens sem receita):\n";

    // Função auxiliar para formatar valores numéricos
    function formatarValor(valor) {
        return valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Cálculo do custo das matérias-primas
    for (let material in materiasPrimas) {
        let qtd = materiasPrimas[material];
        let itemMaterial = catalogo.buscarItem(material);
        if (Object.keys(itemMaterial.receita).length === 0) { // Apenas para matérias-primas
            let custoTotalMaterial = itemMaterial.valorMercado * qtd;
            custoMateriasPrimas += custoTotalMaterial;
            output += `- ${qtd} ${material} (Preço: ${formatarValor(itemMaterial.valorMercado)}, Custo total: ${formatarValor(custoTotalMaterial)})\n`;
        }
    }

    output += `Custo Total de Matérias-Primas: ${formatarValor(custoMateriasPrimas)}\n\n`;
    output += "Custo de Fabricação (comprando os itens da receita):\n";

    // Cálculo do custo de fabricação comprando os itens da receita
    function calcularCustoCompraItensReceita(item, qtd) {
        if (Object.keys(item.receita).length > 0) {
            for (let subitemNome in item.receita) {
                let subitem = catalogo.buscarItem(subitemNome);
                let subitemQtd = item.receita[subitemNome] * qtd;
                let custoSubitem = subitem.valorMercado * subitemQtd;
                custoFabricacao += custoSubitem;
                output += `- ${subitemQtd} ${subitemNome} (Preço: ${formatarValor(subitem.valorMercado)}, Custo total: ${formatarValor(custoSubitem)})\n`;
            }
        }
    }

    let itemFinal = catalogo.buscarItem(nomeItem);
    calcularCustoCompraItensReceita(itemFinal, quantidade);
    output += `Custo Total de Fabricação: ${formatarValor(custoFabricacao)}\n\n`;

    // Preço do item final
    let precoTotalComItensProntos = custoMateriasPrimas + custoFabricacao;
    output += `Preço por unidade do item final: ${formatarValor(itemFinal.valorMercado)}\n`;
    output += `Custo Total com Itens Prontos x${quantidade}: ${formatarValor(precoTotalComItensProntos)}\n`;
    return output;
}

function filtrarPorTipo() {
    const tipoSelecionado = document.getElementById("tipoSelect").value;
    const receitaSelect = document.getElementById("receitaSelect");
    receitaSelect.innerHTML = '';

    if (tipoSelecionado === 'Todos') {
        for (let tipo in catalogo.itens) {
            for (let nomeItem in catalogo.itens[tipo]) {
                receitaSelect.innerHTML += `<option value="${nomeItem}">${nomeItem}</option>`;
            }
        }
    } else {
        for (let nomeItem in catalogo.itens[tipoSelecionado]) {
            receitaSelect.innerHTML += `<option value="${nomeItem}">${nomeItem}</option>`;
        }
    }

    listarItensReceita(receitaSelect.value);
}

function listarItensReceita(nomeItem) {
    const itensDiv = document.getElementById("itensReceita");
    itensDiv.innerHTML = '';
    let itensListados = new Set();

    function adicionarItemLista(item, nivel = 0) {
        if (item && Object.keys(item.receita).length > 0) {
            for (let subitemNome in item.receita) {
                if (!itensListados.has(subitemNome)) {
                    const subitem = catalogo.buscarItem(subitemNome);
                    itensDiv.innerHTML += `<div style="margin-left: ${nivel * 20}px;">
                                            <label>${subitemNome}:</label>
                                            <input type="number" id="valor-${subitemNome}" value="${subitem.valorMercado}" class="form-control" style="width: 100px; display: inline-block;">
                                        </div>`;
                    itensListados.add(subitemNome);
                }
                const subitem = catalogo.buscarItem(subitemNome);
                adicionarItemLista(subitem, nivel + 1);
            }
        }
    }

    const itemSelecionado = catalogo.buscarItem(nomeItem);
    if (itemSelecionado) {
        itensDiv.innerHTML += `<div>
                                <label>${nomeItem}:</label>
                                <input type="number" id="valor-${nomeItem}" value="${itemSelecionado.valorMercado}" class="form-control" style="width: 100px; display: inline-block;">
                            </div>`;
        itensListados.add(nomeItem);
        adicionarItemLista(itemSelecionado);
    }

    if (itensDiv.innerHTML === '') {
        itensDiv.innerHTML = '<p>Nenhum item na receita.</p>';
    }

    document.getElementById("itensReceitaSection").style.display = 'block';
}

function mostrarPrecoTotal() {
    const item = document.getElementById("receitaSelect").value;
    const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
    if (item) {
        // Atualiza valores do catálogo com base nos inputs
        const itensInputs = document.querySelectorAll("#itensReceita input[type='number']");
        itensInputs.forEach(input => {
            const nomeItem = input.id.replace("valor-", "");
            const valor = parseFloat(input.value);
            const itemCatalogo = catalogo.buscarItem(nomeItem);
            if (itemCatalogo) {
                itemCatalogo.valorMercado = valor;
            }
        });

        document.getElementById("resultado").textContent = imprimirPrecoTotal(item, quantidade, catalogo);
    } else {
        document.getElementById("resultado").textContent = '';
    }
}