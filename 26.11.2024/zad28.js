let fib = [0, 1];
let i = 2;
while (true) {
    let nextFib = fib[i - 1] + fib[i - 2];
    if (nextFib > 100) break;
    fib.push(nextFib);
    i++;
}

for (let j = 0; j < fib.length; j++) {
    document.write(fib[j] + " ");
}
