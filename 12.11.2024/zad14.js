function porownajZ10() {
    for (let i = 5; i <= 15; i++) {
        if (i < 10) {
            document.write(i + " jest mniejsze od 10");
        } else if (i > 10) {
            document.write(i + " jest większe od 10");
        } else {
            document.write(i + " jest równe 10");
        }
    }
}

porownajZ10();