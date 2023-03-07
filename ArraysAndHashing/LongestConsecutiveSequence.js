var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums.sort((a,b)=> a - b)
    nums = new Array(...new Set(nums))
    longestSequence=[]
    tempSequence=[]
    for(let i = 0 ; i < nums.length ; i++){
        if (nums[i]+1 === nums[i+1]){
            tempSequence.push(nums[i])
            if(tempSequence.length > longestSequence.length){
                longestSequence = tempSequence
            }
        }else{
            tempSequence = []
        }
    }
    return longestSequence.length + 1
};

console.log(longestConsecutive([1,2,3,4]))
