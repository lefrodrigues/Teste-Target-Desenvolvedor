// Função para formatar o valor monetário
function formatarValor(valor) {
    if (valor === 0) {
        return "R$ 0";
    }
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valor);
}

// Função para calcular e mostrar os resultados
function calcularFaturamento(data) {
    // Menor faturamento diário do mês
    let minFat = data[0].valor;
    for (let i = 1; i < data.length; i++) {
        if (data[i].valor < minFat) {
            minFat = data[i].valor;
        }
    }
    document.getElementById('menorFaturamento').textContent = `O menor faturamento diário no mês foi: ${formatarValor(minFat)}.`;

    // Maior faturamento diário do mês
    let maxFat = data[0].valor;
    for (let i = 1; i < data.length; i++) {
        if (data[i].valor > maxFat) {
            maxFat = data[i].valor;
        }
    }
    document.getElementById('maiorFaturamento').textContent = `O maior faturamento diário no mês foi: ${formatarValor(maxFat)}.`;

    // Número de dias em que o faturamento foi superior à média mensal
    let sum = 0; // Variável que acumula a soma
    let average = 0; // Variável que acumula a média
    let validDays = 0; // Variável que acumula quantidade de dias com faturamento > 0
    let betterDays = 0; // Variável que acumula quantidade de dias com faturamento acima da média mensal

    for (let i = 0; i < data.length; i++) {
        // Validando os dias com faturamento válido
        if (data[i].valor > 0) {
            validDays++;
            sum += data[i].valor;
        }
    }

    if (validDays > 0) {
        average = sum / validDays; // Média dos dias válidos

        // Verificando dias acima da média
        for (let i = 0; i < data.length; i++) {
            if (data[i].valor > average) {
                betterDays++;
            }
        }
    }

    document.getElementById('diasAcimaMedia').textContent = `O número de dias em que o faturamento diário ficou acima da média mensal foi: ${betterDays} dias.`;
    document.getElementById('mediaMensal').textContent = `A média de faturamento mensal foi: ${formatarValor(average)}.`;
}

// Função para carregar o relatório
function carregarRelatorio() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            calcularFaturamento(data);
            document.getElementById('resultados').style.display = 'block';
            document.getElementById('erro').style.display = 'none';
        })
        .catch(error => {
            document.getElementById('erro').style.display = 'block';
            document.getElementById('resultados').style.display = 'none';
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}
