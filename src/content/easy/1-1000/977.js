// 977 - Squares of a Sorted Array

function sortedSquares(nums) {
    const squares = [];
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const leftNum = Math.abs(nums[left]);
        const rightNum = Math.abs(nums[right]);
        if (leftNum < rightNum) {
            squares.push(rightNum ** 2);
            right--;
        } else {
            squares.push(leftNum ** 2);
            left++;
        }
    }
    return squares.reverse();
}
