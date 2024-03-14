let lampada1 = false;
let lampada2 = false;
let lampada3 = false;

function verificarLampadas(interruptor1, interruptor2, interruptor3) {
  // Primeira verificação
  ligarInterruptores(interruptor1, interruptor2, interruptor3);

  // Segunda verificação
  ligarInterruptores(interruptor1, interruptor2, interruptor3);

  // Verifica qual interruptor controla cada lâmpada
  if (lampada1) {
    console.log('O interruptor 1 controla a lâmpada 1.');
  } else if (lampada2) {
    console.log('O interruptor 1 controla a lâmpada 2.');
  } else {
    console.log('O interruptor 1 controla a lâmpada 3.');
  }

  if (lampada2) {
    console.log('O interruptor 2 controla a lâmpada 2.');
  } else if (lampada1) {
    console.log('O interruptor 2 controla a lâmpada 1.');
  } else {
    console.log('O interruptor 2 controla a lâmpada 3.');
  }

  if (lampada3) {
    console.log('O interruptor 3 controla a lâmpada 3.');
  } else if (lampada1) {
    console.log('O interruptor 3 controla a lâmpada 1.');
  } else {
    console.log('O interruptor 3 controla a lâmpada 2.');
  }
}

function ligarInterruptores(interruptor1, interruptor2, interruptor3) {
  lampada1 = !lampada1;
  if (interruptor1) lampada1 = !lampada1;

  lampada2 = !lampada2;
  if (interruptor2) lampada2 = !lampada2;

  lampada3 = !lampada3;
  if (interruptor3) lampada3 = !lampada3;
}

// Chama a função passando os estados dos interruptores (true para ligado, false para desligado)
verificarLampadas(true, false, true);


//O interruptor 1 controla a lâmpada 3.
//O interruptor 2 controla a lâmpada 3.
//O interruptor 3 controla a lâmpada 2.
