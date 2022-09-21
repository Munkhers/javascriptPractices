function largestNum(num1, num2, num3) {
    if (typeof num1 === 'string' || typeof num2 === 'string' || typeof num3 === 'string') {
        console.log("must be number")
        return
    }
    if (num1 >= num2 && num1 >= num3) {
        console.log(`Largest number is ${num1}`)
    }
    else if (num2 >= num1 && num2 >= num3) {
        console.log(`Largest number is ${num2}`)
    }
    else {
        console.log(`Largest number is ${num3}`)
    }


}
largestNum(2, 2, 5)