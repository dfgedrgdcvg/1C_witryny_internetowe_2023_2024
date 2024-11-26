let n = prompt("Podaj liczbę wierszy (n):");
let m = prompt("Podaj liczbę kolumn (m):");
n = parseInt(n);
m = parseInt(m);

for (let i = 0; i < n; i++) {
    let linia = '<br>';
    for (let j = 0; j < m; j++) {
        linia += '* ';
    }
    document.write(linia);
}
