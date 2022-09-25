const alphabets = [
    {letter: 'a', index: 1},
    {letter: 'm', index: 13},
    {letter: 'e', index: 5}
    ]
const sortFunction = (arr) => {
    // console.log(arr)
    const sorted = arr.sort((obj1, obj2) => {
        if(obj1.index > obj2.index)
            return 1 
        else return -1
        // console.log('obj1', obj1)
        // console.log('obj2', obj2)
    })
    console.log(sorted)
}
    
sortFunction(alphabets)
