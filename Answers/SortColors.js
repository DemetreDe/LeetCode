var sortColors = function (nums) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    let beg = 0;
    let end = nums.length - 1;
    let mid = 0;
    while (mid <= end) {
        if (nums[mid] == 0) {
            swap(nums, beg, mid)
            beg++;
            mid++;
        }
        else if (nums[mid] == 1) {
            mid++;
        }
        else {

            swap(nums, mid, end)

            end--;
        }
    }
};

var nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
console.log(nums)