const getRomanNum = (num) => {
    if (num <= 0) {return ''}
     else if (num > 100) { return 'Only works for numbers that are less than 101'}
     else if (num === 100) { return 'C' + getRomanNum(num - 100)}
     else if (num >= 90) { return 'XC' + getRomanNum(num - 90)}
     else if (num >= 50) { return 'L' + getRomanNum(num - 50)}
     else if (num >= 40) { return 'XL' + getRomanNum(num - 40)}
     else if (num >= 10) { return 'X' + getRomanNum(num - 10)}
     else if (num >= 9) { return 'IX' + getRomanNum(num - 9)}
     else if (num >= 5) { return 'V' + getRomanNum(num - 5)}
     else if (num >= 4) { return 'IV' + getRomanNum(num - 4)}
     else if (num >= 1) { return 'I' + getRomanNum(num - 1)}
}
console.log(getRomanNum(87))


