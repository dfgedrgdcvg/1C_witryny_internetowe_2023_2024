function wyswietlTabliczkeDzielenia() {
    const liczba = parseInt(prompt("Podaj liczbę, dla której chcesz zobaczyć tabliczkę dzielenia:"));

    if (isNaN(liczba) || liczba <= 0) {
        alert("Proszę podać liczbę większą niż 0.");
        return;
    }

    let wynik = "";
    for (let i = 1; i <= 10; i++) {
        wynik += `${liczba} ÷ ${i} = ${(liczba / i).toFixed(2)}\n`;
    }

    alert("Tabliczka dzielenia dla liczby " + liczba + ":\n\n" + wynik);
}

wyswietlTabliczkeDzielenia();