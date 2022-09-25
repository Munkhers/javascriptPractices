
const binToDec = (binary) => {
    
    binary.toString()
    let param = binary.toString().split('').reverse();
    
    param.map((item) => {
        ;
        console.log(typeof param)
    })

    // for(let index = param.length - 1; index >= 0; index--) {
    //     console.log(param[index]);
    //     console.log(parseInt(param[index]));
    }


binToDec(110)