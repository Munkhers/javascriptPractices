
const binToDec = (binary) => {
    
    // binary.toString()
    let param = binary.toString();

    for(let index = param.length - 1; index >= 0; index--) {
        console.log(param[index]);
        console.log(parseInt(param[index]));
    }

}
binToDec(10101010)