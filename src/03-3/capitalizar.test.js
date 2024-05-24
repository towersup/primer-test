const capitalizarTexto = require("./capitalizarTexto")

describe('Pruebas para la función capitalizarTexto', () => {
  test('Verificar la conversión de una cadena a título', () => {
    expect(capitalizarTexto('hola mundo')).toBe('Hola Mundo');
  });

  test('Comprobar que una cadena vacía devuelva una cadena vacía', () => {
    expect(capitalizarTexto('')).toBe('');
  });

  test('Asegurar que una cadena ya en título no cambie', () => {
    expect(capitalizarTexto('Hola Mundo')).toBe('Hola Mundo');
  });
});
