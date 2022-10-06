const randomFunction = ( num1, num2, cb) => {
    cb(num1, num2)
}


randomFunction(2, 4, (x,y) => {
    console.log(x * y)
})