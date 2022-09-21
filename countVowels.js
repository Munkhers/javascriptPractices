const input = 'muug'
const vowels = ['a', 'u', 'e', 'o', 'i']
let numOfVowels = 0
for (i = 0; i < input.length; i++) {
    input[i]
    for (j = 0; j < vowels.length; j++) {
        vowels[j]

        if (input[i] === vowels[j]) {
            numOfVowels++
        }
    }
}
console.log(numOfVowels)


