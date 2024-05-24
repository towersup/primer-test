function capitalizarTexto(texto) {
    return texto.replace(/(^|\s)\S/g, letra => letra.toUpperCase());
  }
  
  console.log(capitalizarTexto('hola mundo'));
  