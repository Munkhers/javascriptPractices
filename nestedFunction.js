function randomFunction(num1) {
    function randomFunction1(num2){
        function randomFunction2(num3){
            return num1 * num2 * num3
        }
        return randomFunction2
    }
    return randomFunction1
}

        
console.log(randomFunction(5)(8)(3))


const randomFunction3 = (a) => {
    const randomFunction4 = (b) => {
        const randomFunction5 = (c) => {
            return a * b * c
        }
        return randomFunction5
    }
    return randomFunction4
}
console.log(randomFunction3(1)(2)(3))