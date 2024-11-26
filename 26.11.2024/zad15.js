let tekst = "programming";
let samogloski = "aeiouAEIOU";
let znalezioneSamogloski = "";

for (let i = 0; i < tekst.length; i++) {
    if (samogloski.includes(tekst[i])) {
        znalezioneSamogloski += tekst[i] + "<br>";
    }
}

document.write("Samogłoski w podanym tekście proggraming : " + znalezioneSamogloski);
