let tekst = "hello";
let odwroconyTekst = "";
for (let i = tekst.length - 1; i >= 0; i--) {
    odwroconyTekst += tekst[i];
}
document.write("Odwrocony tekst: " + odwroconyTekst);
