for (let i = 1; i <= 30; i++) {
    // Sprawdzamy, czy liczba jest wielokrotnością 15
    if (i % 15 === 0) {
        document.write("FizzBuzz");
    }
    // Sprawdzamy, czy liczba jest wielokrotnością 3
    else if (i % 3 === 0) {
        document.write("Fizz");
    }
    // Sprawdzamy, czy liczba jest wielokrotnością 5
    else if (i % 5 === 0) {
        document.write("Buzz");
    } else {
        document.write(i + " ");
    }
}