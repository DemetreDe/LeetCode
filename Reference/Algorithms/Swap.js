//User Defined
function swap(array, index1, index2) {
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

//Arrow Function
const swap = (myArray, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};
