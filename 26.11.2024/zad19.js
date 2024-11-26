let tablica = [5, 12, 8, 20, 1];
let licznik = 0;

for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] > 10) {
        licznik++;
    }
}

document.write("Liczba elementów większych od 10 w tablicy wynosi: " + licznik);
