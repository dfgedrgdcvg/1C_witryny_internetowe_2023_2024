let tablica = [5, 12, 8, 20, 1];
let max = tablica[0];

for (let i = 1; i < tablica.length; i++) {
    if (tablica[i] > max) {
        max = tablica[i];
    }
}

document.write("Największy element w tablicy to: " + max);
