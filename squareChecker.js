const squareChecker = (x) => {
    
    // const isInteger = (num) => {
    //     return num % 1 === 0
    //     // if ( num % 1 === 0 )
    //     //     return true
    //     // return false
    // }
    return Math.sqrt(x) % 1 === 0
    // return isInteger(Math.sqrt(x))
    // if (isInteger(Math.sqrt(x))) {
    //     return true
    // }
    // return false
    
}
console.log(squareChecker(10))

// Number.isInteger