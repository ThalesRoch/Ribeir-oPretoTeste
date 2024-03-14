// Função para calcular a sequência de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const numero = 21; // Altere este valor para o número aleatorio
  
  // Verifica se o número pertence à sequência
  let pertence = false;
  let i = 0;
  while (fibonacci(i) <= numero) {
    if (fibonacci(i) === numero) {
      pertence = true;
      break;
    }
    i++;
  }
  
  // Exibe o resultado
  if (pertence) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }

  // Resposta desse codigo é "21 pertence à sequência de Fibonacci."
  