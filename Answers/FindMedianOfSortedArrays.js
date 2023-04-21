var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length === 0 && nums2.length === 1) return nums2[0]
    if (nums2.length === 0 && nums1.length === 1) return nums1[0]

    var sum = nums1.length + nums2.length;
    var isOdd = (sum % 2 === 1) ? true : false;
    var centerIndex = sum / 2

    var nums1Pointer = 0
    var nums2Pointer = 0
    var current;

    for (var i = 0; i < centerIndex + 1; i++) {
        if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
            current = nums1[nums1Pointer];
            nums1Pointer++
            continue
        }
        current = nums2[nums2Pointer];
        nums2Pointer++
    }
    if (isOdd) return current
    if (nums1[nums1Pointer] < nums2Pointer) return current = (current + nums1[nums1Pointer]) / 2
    return current = (current + nums2[nums2Pointer]) / 2

};

var nums1 = [1, 3]
var nums2 = [2, 7]

console.log(findMedianSortedArrays(nums1, nums2))

