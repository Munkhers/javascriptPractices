function randomFunction(x) {
    function randomFunction1(y){
        function randomFunction2(z){
            return x * y * z
        }
        return randomFunction2
    }
    return randomFunction1
}

        
console.log(randomFunction(0)(3)(5))