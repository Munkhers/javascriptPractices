const gurvaaTavka = (x) => {
    let result = '';
    for (let i = 1; i <= x; i++) {
        if( i % 3 === 0 && i % 5 === 0) {
            console.log('Gurvaa and Tavka');
        } else if (i % 5 === 0) {
            console.log('Tavka');
        
        } else if ( i % 3 === 0) {
            console.log('Gurvaa')
        }
        else {
            console.log(i);
        }
    }
}
gurvaaTavka(15);