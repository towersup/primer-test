const esPrimo = require("./esPrimo")

describe('Pruebas para la función esPrimo', () => {
  test('Comprobar si un número primo devuelve true', () => {
    expect(esPrimo(5)).toBe(true);
  });

  test('Verificar si un número no primo devuelve false', () => {
    expect(esPrimo(4)).toBe(false);
  });

  test('Asegurar que 1 no sea considerado primo', () => {
    expect(esPrimo(1)).toBe(false);
  });
});
