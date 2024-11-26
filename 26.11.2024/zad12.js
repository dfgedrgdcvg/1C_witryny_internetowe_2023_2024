let slowo = "banana";
let licznik = 0;
for (let i = 0; i < slowo.length; i++) {
    if (slowo[i] === "a") {
        licznik++;
    }
}
document.write("Litera 'a' występuje " + licznik + " razy w słowie 'banana'.");
