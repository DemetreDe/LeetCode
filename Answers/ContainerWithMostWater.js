//beats 76% in time, 67% in space
var maxArea = function(height) {
    if(height.length === 0) return 0

    var startpointer = 0
    var endPointer = height.length - 1
    var largestVolume = 0

    while (startpointer != endPointer){
        var gap = endPointer - startpointer
        if (height[startpointer] > height[endPointer]){
            largestVolume = isLarger(height[endPointer] * gap, largestVolume)
            endPointer--
        }else{
            largestVolume = isLarger(height[startpointer] * gap, largestVolume)
            startpointer++
        }
    }
    return largestVolume
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]))

//beats 82% in time, 31% in space
var maxArea2 = function(height) {
    if(height.length === 0) return 0
    var endPointer = height.length - 1
    var gap = height.length - 1
    var largestVolume = 0
    var temp = 0
    for (let i = 0 ; i != endPointer ; i){
        if (height[i] > height[endPointer]){
            temp = height[endPointer] * gap
            largestVolume = isLarger(temp, largestVolume)
            endPointer--
            gap--
        }else{
            temp = height[i] * gap
            largestVolume = isLarger(temp,largestVolume)
            i++
            gap--
        }
    }
    return largestVolume
};


var isLarger = function(input, largest){
    if(input>largest) return input
    return largest
}