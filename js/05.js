function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  let textoOriginal = 'Olá, mundo!';
  let textoInvertido = inverterString(textoOriginal);
  console.log(textoInvertido); 
  
  // Saída: '!odnum ,álO'
  