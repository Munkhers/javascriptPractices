const gcd = (num1, num2) => {
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        console.log('must be number')
        return
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);


    let bigNum = num1
    let smallNum = num2

    if (num2 >= num1) {
        bigNum = num2
        smallNum = num1
        // } else {
        //     bigNum = num1
        //     smallNum = num2
    }

    const rmdr = bigNum % smallNum
    if (rmdr != 0) {
        gcd(rmdr, smallNum)
    } else {
        console.log(smallNum)
    }

}

gcd(-99, '55')