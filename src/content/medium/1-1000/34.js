// 34 - Find First and Last Position of Element in Sorted Array

function searchRange(nums, target) {
    function binarySearch(first) {
        let index = -1, l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (nums[m] < target) l = m + 1;
            else if (nums[m] > target) r = m - 1;
            else {
                index = m;
                if (first) r = m - 1;
                else l = m + 1;
            }
        }
        return index;
    }
    return [binarySearch(true), binarySearch()];
}
