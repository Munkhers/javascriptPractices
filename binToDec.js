
const binToDec = (binary) => {

    let revdBin = binary.toString().split('').reverse();
    let deci = 0;

    revdBin.map((num, i) => {
        deci += (num * Math.pow(2, i));
    })

    console.log('The decimal form of this binary is ' + deci);
}


binToDec(11011011);