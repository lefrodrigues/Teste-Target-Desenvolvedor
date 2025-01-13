function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(numero) || numero < 0) {
      resultado.textContent = "Por favor, insira um número válido.";
      resultado.style.color = 'red';
      return;
    }
  
    let fibonacci = [0, 1];
    
    // Gera a sequência até o número informado
    while (fibonacci[fibonacci.length - 1] < numero) {
      let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(proximo);
    }
    
    // Verifica se o número informado pertence à sequência
    if (fibonacci.includes(numero)) {
      resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci!`;
      resultado.style.color = 'green';
    } else {
      resultado.textContent = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
      resultado.style.color = 'red';
    }
  }
  