let wysokosc = 5;
for (let i = 1; i <= wysokosc; i++) {
    let linia = '<br>';
    for (let j = 1; j <= i; j++) {
        linia += '* ';
    }
    document.write(linia);
}
