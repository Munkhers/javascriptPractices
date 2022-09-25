let sum = 0
const multipleSum = (num) => {
    for (i = 1; i <= num; i++) {
        if (i % 4 === 0 || i % 5 === 0)
            sum = sum + i
    }
    console.log(sum)
}

multipleSum(6)