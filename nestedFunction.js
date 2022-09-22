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