let sum = 0
const sumOfPos = (arr) => {
    arr.map((item) => {
        sum += item > 0 ? item : 0;
    });

    console.log(sum);
}
sumOfPos([-2,3.2,4,1,-5,-2,83])