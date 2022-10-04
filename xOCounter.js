let numOfX = 0
let numOfO = 0
const xOCounter = (xos) => {
    let splitted = xos.split('');

    splitted.map((item) => {
        item === 'x' || item === 'X' ? numOfX++ : (item === 'o' || item === 'O') && numOfO++
    })

    return numOfX === numOfO;
}
console.log(xOCounter('xoXoXaO'))