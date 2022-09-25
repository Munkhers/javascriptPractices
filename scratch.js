


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const map2 = (callbackFunction) => {
    for(let i = 0; i < animals.length; i++) {
        callbackFunction(animals[i], i, animals)
    }
}



const secretMessage = animals.map((animal, animalIdx, wholeArray) => {
    console.log('map', animal, animalIdx, wholeArray)
})

const secretMessage2 = map2((animal, animalIdx, wholeArray) => {
    console.log('map2', animal, animalIdx, wholeArray)
})

   
  