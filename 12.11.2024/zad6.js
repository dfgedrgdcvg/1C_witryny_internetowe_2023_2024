let numbers = [];

for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt(`Podaj liczbę ${i}:`));

    if (!isNaN(num)) {
        numbers.push(num); 
    } else {
        document.write("Proszę podać poprawną liczbę.");
        i--; 
    }
}

let maxNumber = Math.max(...numbers);

document.write("Największa liczba to:", maxNumber);