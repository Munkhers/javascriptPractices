const isIsogram = (str) => {
    if (typeof str !== 'string') {
        console.log('Must be string')
        return
    }
    let lower = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (lower[i] === lower[i + 1]) {
            console.log(str + ' is an isogram word!')
            return
        }
    }
    console.log(str + ' is not an isogram word!')
}


isIsogram('BoOtcamp')

// const isIsogram = (str) => {

//     let arrStr = str.toLowerCase().split('')

//     arrStr.forEach((letter, index) => {
//         if (arrStr[index] === arrStr[index + 1]) {
//             console.log(str + ' is an isogram word!')
//         }
//     })
//     console.log(false)
// }

// isIsogram('Bootcamp')

