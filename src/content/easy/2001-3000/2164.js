// 2164 - Sort Even and Odd Indices Independently

function sortEvenOdd(nums) {
    const odds = new Uint8Array(Math.floor(nums.length / 2));
    const evens = new Uint8Array(Math.ceil(nums.length / 2));
    for (let i = 0; i < nums.length; i++) {
        (i % 2 ? odds : evens)[i / 2 >> 0] = nums[i];
    }
    odds.sort().reverse();
    evens.sort();
    for (let i = 0; i < nums.length; i++) {
        nums[i] = (i % 2 ? odds : evens)[i / 2 >> 0];
    }
    return nums;
}
