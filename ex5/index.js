function inverterString(str) {
  let strInvertida = "";

  // Iterar sobre a string do final para o início
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}

// Exemplo de uso
const stringOriginal = "Target";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
