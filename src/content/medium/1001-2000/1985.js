// 1985 - Find the Kth Largest Integer in the Array

function kthLargestNumber(nums, k) {
    nums.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return nums.at(-k);
}
