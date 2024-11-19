function sumaLiczbParzystych() {
    let suma = 0;

    for (let i = 10; i <= 50; i++) {
        if (i % 2 === 0) { 
            suma += i; 
        }
    }

    alert("Suma liczb parzystych w zakresie od 10 do 50 wynosi: " + suma);
}

sumaLiczbParzystych();