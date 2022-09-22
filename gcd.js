const gcd = (num1, num2) => {

    num1 = Math.abs(parseInt(num1));
    num2 = Math.abs(parseInt(num2));

    if (num2 >= num1) {
        bigNum = num2
        smallNum = num1
    } else {
        bigNum = num1
        smallNum = num2
    }

    const rmdr = bigNum % smallNum
    if (rmdr != 0) {
        gcd(rmdr, smallNum)
    } else {
        console.log(smallNum)
    }
}

gcd(-99, '-999')