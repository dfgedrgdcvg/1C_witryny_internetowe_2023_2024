let number = prompt("Podaj liczbę:");

if (!isNaN(number) && number !== "") {
    let reversed = number.split("").reverse().join("");
    document.write(`Liczba cyfr w liczbie: ${number.length}`);
    document.write(`Liczba w odwrotnej kolejności: ${reversed}`);
} else {
    document.write("Proszę podać poprawną liczbę.");
}