function invertString() {
    const input = document.getElementById('inputString').value;
    let invertedString = '';

    // Percorre a string de trás para frente e vai montando a string invertida
    for (let i = input.length - 1; i >= 0; i--) {
        invertedString += input[i];
    }

    // Exibe a string invertida
    document.getElementById('output').textContent = invertedString;
}
