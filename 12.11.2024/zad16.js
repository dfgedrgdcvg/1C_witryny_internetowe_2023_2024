function wyswietlPiramide() {
    const n = parseInt(prompt("Podaj liczbę, dla której ma zostać wyświetlona piramida:"));

    if (isNaN(n) || n <= 0) {
        alert("Proszę podać liczbę większą niż 0.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let ciag = "";
        for (let j = 1; j <= i; j++) {
            ciag += j;
        }

        let spacje = " ".repeat(n - i);
        document.write(spacje + ciag);
    }
}

wyswietlPiramide();