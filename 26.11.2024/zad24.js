let liczba = prompt("Podaj liczbę:");
liczba = parseInt(liczba);

function silnia(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
}

document.write(liczba + "! = " + silnia(liczba));
