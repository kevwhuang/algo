// 3550 - Smallest Index With Digit Sum Equal to Index

function smallestIndex(nums) {
    let i = -1;
    while (++i < nums.length) {
        let acc = 0, cur = nums[i];
        while (cur) acc += cur % 10, cur = cur / 10 >> 0;
        if (acc === i) return i;
    }
    return -1;
}
