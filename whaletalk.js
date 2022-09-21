const input = 'hun ahtai deel zahtai'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []
for (i = 0; i < input.length; i++) {
    input[i]
    if (input[i] === 'e') {
        resultArray.push('e')
    }
    if (input[i] === 'u') {
        resultArray.push('u')
    }
    for (j = 0; j < vowels.length; j++) {
        vowels[j]

        if (input[i] === vowels[j]) {
            resultArray.push(input[i])

        }
    }
}
const resultString = resultArray.join('').toUpperCase()
console.log(resultString)
