const findNthLargest = (arr, n) => {
    arr.sort()
    console.log(arr[n - 1])
}
findNthLargest([203, 201, 402, 4891, 20, -2], 3)