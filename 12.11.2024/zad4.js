let number = parseInt(prompt("Podaj liczbę, dla której chcesz wyświetlić tabliczkę mnożenia:"));

if (!isNaN(number)) {
    document.write(`Tabliczka mnożenia dla liczby ${number}:`);

    for (let i = 1; i <= 10; i++) {
        document.write(`${number} x ${i} = ${number * i}`);
    }
} else {
    document.write("Proszę podać poprawną liczbę.");
}