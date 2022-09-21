const programming = {}
programming.languages = ['javascript', 'java']
programming.difficulty = 9
programming.usage = 'Web'
programming.isRewarding = true
delete programming.isRewarding
programming.isFun = "true"
programming.languages.push("Phyton")
programming.difficulty = 8
for (let i = 0; i < programming.languages.length; i++) {

    console.log(programming.languages[i])
}

let index = 0
while (index < programming.languages.length) {
    console.log(programming.languages[index])
    index++
}
programming.languages.map()