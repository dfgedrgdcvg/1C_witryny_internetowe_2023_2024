let liczbyPierwsze = [];
for (let i = 2; i <= 100; i++) {
    let czyPierwsza = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            czyPierwsza = false;
            break;
        }
    }
    if (czyPierwsza) {
        liczbyPierwsze.push(i);
    }
}

for (let i = 0; i < liczbyPierwsze.length; i++) {
    document.write(liczbyPierwsze[i] + "<br>");
}
