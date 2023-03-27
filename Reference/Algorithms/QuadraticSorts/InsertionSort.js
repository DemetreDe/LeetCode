//O(n^2)
//Good for nearly sorted data set
//Can be used when data streaming
var InsertionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
        console.log(arr)
    }
    return arr
}


array = [10, 5, 6, 7, 8, 9, 4, 2, 3, 1, 100, 1000]

console.log(InsertionSort(array))