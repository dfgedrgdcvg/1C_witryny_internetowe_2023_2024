function sprawdzPodzielnosc() {
    for (let i = 1; i <= 20; i++) {
        if (i % 4 === 0) {
            document.write(i + " jest podzielne przez 4, ");
        } else {
            document.write(i + " nie jest podzielne przez 4, ");
        }
    }
}

sprawdzPodzielnosc();