const base = require("./data.json");

function calcularFaturamento(base) {
  // Filtrar dias com faturamento (ignorar dias com valor 0)
  const diasComFaturamento = base.faturamentoDiario.filter(
    (dia) => dia.valor > 0
  );

  // Extrair apenas os valores dos dias com faturamento
  const valores = diasComFaturamento.map((dia) => dia.valor);

  // Ordenar valores para encontrar o menor e o maior
  valores.sort((a, b) => a - b);

  const menorFaturamento = valores[0];
  const maiorFaturamento = valores[valores.length - 1];

  // Calcular a média mensal (somando os valores válidos e dividindo pelo número de dias válidos)
  const somaFaturamento = valores.reduce((acc, val) => acc + val, 0);
  const mediaMensal = somaFaturamento / valores.length;

  // Contar o número de dias com faturamento acima da média
  const diasAcimaDaMedia = valores.filter(
    (valor) => valor > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

// Chamar a função e armazenar os resultados
const resultado = calcularFaturamento(base);

// Exibir os resultados
console.log(
  `Menor valor de faturamento: ${resultado.menorFaturamento.toFixed(2)}`
);
console.log(
  `Maior valor de faturamento: ${resultado.maiorFaturamento.toFixed(2)}`
);
console.log(
  `Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`
);
