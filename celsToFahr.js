function converter(celsius) {
    fahrenheit = celsius * 9 / 5 + 32
    console.log(`${celsius}C equals ${fahrenheit}F`)
}
converter(20)


function converter1(fahrenheit1) {
    celsius1 = (fahrenheit1 - 32) * 5 / 9
    console.log(`${fahrenheit1}F equals ${celsius1}C`)
}
converter1(68)