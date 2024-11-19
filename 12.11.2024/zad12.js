function wyswietlNieparzyste() {
    const liczba = parseInt(prompt("Podaj liczbę:"));

    if (isNaN(liczba) || liczba <= 1) {
        alert("Proszę podać liczbę większą niż 1.");
        return;
    }

    let liczbyNieparzyste = [];

    for (let i = 1; i < liczba; i += 2) {
        liczbyNieparzyste.push(i);
    }

    alert("Liczby nieparzyste mniejsze od " + liczba + ": " + liczbyNieparzyste.join(", "));
}

wyswietlNieparzyste();
