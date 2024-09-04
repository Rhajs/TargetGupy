let fib = [0, 1];
let number = 15;

// Laço de repetição para calcular a Fibo
while (fib.length < 15) {
  let nextValue = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(nextValue);
}

console.log(fib);

// Verificação se a variavel faz parte da Fibo
console.log(fib.includes(number));
