function liczbyWiekszeNiz5() {
    let liczby = [];

    for (let i = 0; i < 10; i++) {
        let liczba = parseFloat(prompt("Podaj liczbę nr " + (i + 1) + ":"));
        
        if (!isNaN(liczba)) {
            liczby.push(liczba);
        } else {
            alert("To nie jest poprawna liczba. Spróbuj ponownie.");
            i--;
        }
    }

    let liczbyWieksze = liczby.filter(liczba => liczba > 5);

    if (liczbyWieksze.length > 0) {
        document.write("Liczby większe niż 5:");
        liczbyWieksze.forEach(liczba => {
            document.write(liczba);
        });
    } else {
        document.write("Brak liczb większych niż 5.");
    }
}

liczbyWiekszeNiz5();