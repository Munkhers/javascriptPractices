let result = 0;
let stepCount = 0;
const multiplication = (num) => {

    while(num >= 10) {
        let nums = ('' + num).split('');
        let tempResult = 1;
        nums.map((item) => {
            tempResult = tempResult * item;
        })
        num = tempResult;
        stepCount++;
    }

    console.log('result = ', num, ' steps = ', stepCount);
}
multiplication(738);