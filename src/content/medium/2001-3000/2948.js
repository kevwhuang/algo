// 2948 - Make Lexicographically Smallest Array by Swapping Elements

function lexicographicallySmallestArray(nums, limit) {
    const arr = Array.from({ length: nums.length }, (_, i) => [nums[i], i]);
    arr.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < arr.length) {
        const group = [arr[i][0]], indices = [arr[i][1]];
        while (++i < arr.length) {
            if (arr[i][0] - group[group.length - 1] > limit) break;
            group.push(arr[i][0]);
            indices.push(arr[i][1]);
        }
        group.sort((a, b) => a - b);
        indices.sort((a, b) => a - b);
        for (let j = 0; j < group.length; j++) {
            nums[indices[j]] = group[j];
        }
    }
    return nums;
}
