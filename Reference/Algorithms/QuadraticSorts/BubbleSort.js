//Worst Case O(n^2)
var BubbleSort = function (arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

const swap = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};


// array = [10, 5, 6, 7, 8, 9, 4, 2, 3, 1, 100, 1000]

// console.log(BubbleSort(array))