for (let num = 2; num <= 30; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break; 
        }
    }

    
    if (isPrime) {
        document.write(num + " ");
    }
}