const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Calcular o valor total de faturamento
const totalFaturamento = Object.values(faturamento).reduce(
  (acc, val) => acc + val,
  0
);

// Calcular o percentual de representação de cada estado
const percentuais = {};
for (let estado in faturamento) {
  percentuais[estado] = (
    (faturamento[estado] / totalFaturamento) *
    100
  ).toFixed(2);
}

// Exibir os resultados
for (let estado in percentuais) {
  console.log(`O percentual de ${estado} é: ${percentuais[estado]}%`);
}
