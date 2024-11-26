let tablica = [5, 12, 8, 20, 1];
let odwroconaTablica = [];
for (let i = tablica.length - 1; i >= 0; i--) {
    odwroconaTablica.push(tablica[i]);
}

for (let i = 0; i < odwroconaTablica.length; i++) {
    document.write(odwroconaTablica[i] + "<br>");
}
