const calcularFactorial = require ("./factorial")

describe('Pruebas para la función factorial', () => {
    test('Verificar el cálculo correcto del factorial de un número', () => {
      expect(calcularFactorial(5)).toBe(120);
    });
  
    test('Asegurar que el factorial de 0 sea 1', () => {
      expect(calcularFactorial(0)).toBe(1);
    });
  
    test('Comprobar el factorial de un número negativo', () => {
      expect(calcularFactorial(-1)).toBeNaN();
    });
  });