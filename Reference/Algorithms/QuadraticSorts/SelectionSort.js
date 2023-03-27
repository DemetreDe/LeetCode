//Worst Case O(n^2)
var SelectionSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        swap(arr, i, min)

    }
    return arr
}

const swap = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};


array = [10, 5, 6, 7, 8, 9, 4, 2, 3, 1, 100, 1000]

console.log(SelectionSort(array))