let fib = [0, 1];
let number = 15;

while (fib.length < 15) {
  let nextValue = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(nextValue);
}

console.log(fib);

console.log(fib.includes(number));
