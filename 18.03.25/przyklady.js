//Pusta tablica\
const pustaTablica = [];

//Tablica z elementami
const owoce = ['Jabłko', 'Banan', 'Pomarańcza']

//Pusta tablica
const PustaTablica2 = new Array();

//Tablica z elementami
const liczby = new Array(1, 2, 3, 4, 5);

//dostep do elementow tablicy

const dniTygodnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

console.log(dniTygodnia[0]); //Poniedziałek
console.log(dniTygodnia[3]); //Czwartek

//dlugosc tablicy
const dniTygodnia2 = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
console.log(dniTygodnia2.length); //5

//modyfikacja elementow

const owoce2 = ['Jabłko', 'Banan', 'Pomarańcza'];
owoce2[1] = 'Gruszka';

console.log(owoce); //['Jabłko', 'Banan', 'Pomarańcza']

//metody tablicowe
//1.push(element) - dodaje nowy element na koncu tablicy
const liczby2 = [1, 2, 3];
liczby2.push(4);
console.log(liczby); // [1, 2, 3, 4]

//2.pop() - usuwa ostatni element tablicy i zwraca go
const liczby3 = [1, 2, 3, 4];
const ostatni = liczby3.pop();
console.log(ostatni); //4
console.log(liczby); //[1, 2, 3]

//3.shift - usuwa pierwszy element tablicy i zwraca go
const liczby4 = [1, 2, 3, 4];
const pierwszy = liczby4.shift();
console.log(pierwszy); //1
console.log(liczby); //[2, 3, 4]

//4.unshift(element) - dodaje nowy element na pocztaku tablicy
const liczby5 = [2, 3, 4];
liczby.unshift(1);
console.log(liczby5); //[1, 2, 3, 4]

//5.slice(poczatek, koniec) - zwraca fragment (podtablice) wskazany przez indeksy (nie modyfikuje oryginalniej tablicy)
const liczby6 = [1,2, 3, 4, 5];
const podTablica = liczby6.slice(1, 3);
console.log(podtablica); //[2, 3] (zwaraca element o indeksach 1, 2)
console.log(liczby); //[1, 2, 3, 4, 5]

//6.splice(początek, ileElementów,[noweElementy]) - usuwa, dodaje lub zastepuje elementy w tablicy
//poczatek: pozycja startowa, od ktorej zaczyna sie modyfikacja
//ileElementow: ile elementow usunac
//noweElementy(opcjonalne): co wstawic na miejsce usunietych elementow
const liczby7 = [1, 2, 10, 11];
//usunecie 2 elementow od indeksu 1 i wstawienie w ich miejsce liczby 10 i 11
liczby.splice(1, 2, 10, 11);
console.log(liczby7); //[1, 10, 11, 4, 5]

//7.concat(tablica2) - zwraca nowa tablice bedaca polaczeniem dwoch (lub wiecej) tablic
const tab1 = [1, 2];
const tab2 = [3, 4];
const nowaTablica = tab1.concat(tab2);
console.log(nowaTablica); //[1, 2, 3, 4]

//8.forEach(callback) - wywoluje przekazana funkcje (tzw. callback) dla kazdego elementu tablicy
const liczby8 = [1, 2, 3];
liczby8.forEach((element, indeks) => {
    console.log(`element: ${element}, indeks: ${indeks}`);
});
//element: 1 ,indeks: 0
//element: 2 ,indeks: 1
//element: 3 ,indeks: 2

//9.map(callback) - tworzy nowa tablice ktorej elementy sa wynikiem wywoloania callback na kazdym elemencie oryginalnej tablicy
const liczby9 = [1, 2, 3];
const podwojone = liczby9.map((element) => element * 2);
console.log(podwojone); // [2, 4, 6]
console.log(liczby); // [1, 2, 3]

//10.filter(callback) - zwraca nowa tablice zawierajaca tylko te elementy, dla ktorych prezkazana funkcja callabck zwrocila wartosc prawdziwa
const liczby10 = [1, 2, 3, 4, 5];
const parzyste = liczby10.filter((element) => element % 2 === 0);
console.log(parzyste); // [2, 4]


