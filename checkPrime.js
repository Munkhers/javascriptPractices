const checkPrime = (x) => {
    if (x === 1) {
        return console.log(x + ' is not a prime number.')
    } else if (x > 1) {
        for (let i = 2; (i * i) <= x; i++) {
            if (x % i === 0) {
                console.log(x + ' is a not prime number.')
                return
            }
        }
     console.log(x + ' is a prime number. ')
    }
}

checkPrime(2)