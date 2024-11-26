function isPalindrome(tekst) {
    let odwroconyTekst = "";
    for (let i = tekst.length - 1; i >= 0; i--) {
        odwroconyTekst += tekst[i];
    }
    return tekst === odwroconyTekst;
}

let tekst = "racecar";
if (isPalindrome(tekst)) {
    document.write(tekst + " jest palindromem.");
} else {
    document.write(tekst + " nie jest palindromem.");
}
