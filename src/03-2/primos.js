function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    const raizCuadrada = Math.sqrt(numero);
    for (let i = 3; i <= raizCuadrada; i += 2) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  console.log(esPrimo(5));
  console.log(esPrimo(4));
  