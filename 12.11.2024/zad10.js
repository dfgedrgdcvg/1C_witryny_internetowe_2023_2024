for (let i = 1; i <= 10; i++) {
    let label;

    switch (i) {
        case 1:
            label = "Pierwsza";
            break;
        case 2:
            label = "Druga";
            break;
        case 3:
            label = "Trzecia";
            break;
        case 4:
            label = "Czwarta";
            break;
        case 5:
            label = "Piąta";
            break;
        case 6:
            label = "Szósta";
            break;
        case 7:
            label = "Siódma";
            break;
        case 8:
            label = "Ósma";
            break;
        case 9:
            label = "Dziewiąta";
            break;
        case 10:
            label = "Dziesiąta";
            break;
        default:
            label = "Nieznana";
    }

    document.write(`${i} - ${label}`);
}