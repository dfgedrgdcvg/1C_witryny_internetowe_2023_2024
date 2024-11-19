let number = parseInt(prompt("Podaj liczbę, dla której chcesz obliczyć silnię:"));

if (!isNaN(number) && number >= 0) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.write(`Silnia liczby ${number} wynosi ${factorial}`);
} else {
    document.write("Proszę podać poprawną liczbę całkowitą większą lub równą 0.");
}