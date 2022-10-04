// let str = 'hello';

// console.log(str.split("").reverse().join(""));

// let newStr = '';
// for(let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
// }

// console.log(newStr);

// const reversedString = (str) => { 
// console.log( str.split('').reverse().join(''))
// }
// reversedString('hello')
let newStr = ''
const reversedString = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    console.log(newStr)
}
reversedString('хадгалагдах')
