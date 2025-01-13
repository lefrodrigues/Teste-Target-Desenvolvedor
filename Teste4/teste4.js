// Dados de faturamento mensal
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para formatar valores em R$ xx.xxx,xx
const formatarMoeda = (valor) => {
    return valor === 0
        ? "R$ 0,00"
        : valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// Função para calcular o valor total de faturamento
const calcularTotal = (dados) => {
    return Object.values(dados).reduce((total, valor) => total + valor, 0);
};

// Função para calcular e exibir o percentual
const exibirPercentuais = (dados) => {
    const total = calcularTotal(dados);
    const tabela = document.getElementById('faturamento-tabela');

    for (const estado in dados) {
        const percentual = total > 0 ? ((dados[estado] / total) * 100).toFixed(2) : 0;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${estado}</td>
            <td>${formatarMoeda(dados[estado])}</td>
            <td>${percentual} %</td>
        `;
        tabela.appendChild(tr);
    }
};

// Chama a função para exibir os dados na tabela
exibirPercentuais(faturamento);
