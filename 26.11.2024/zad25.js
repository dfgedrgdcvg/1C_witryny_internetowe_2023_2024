let liczba = prompt("Podaj liczbę:");
liczba = parseInt(liczba);

function czyDoskonała(n) {
    let sumaDzielników = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sumaDzielników += i;
        }
    }
    return sumaDzielników === n;
}

if (czyDoskonała(liczba)) {
    document.write(liczba + " jest liczbą doskonałą.");
} else {
    document.write(liczba + " nie jest liczbą doskonałą.");
}
