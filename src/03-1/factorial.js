function calcularFactorial(numero) {
    if (numero < 0) {
      return NaN;
    }
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  module.exports = calcularFactorial;