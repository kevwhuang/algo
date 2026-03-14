// 3514 - Number of Unique XOR Triplets II

function uniqueXorTriplets(nums) {
    const seen1 = new Uint8Array(1501);
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (seen1[nums[i]]) continue;
        seen1[nums[i]] = 1;
        arr.push(nums[i]);
    }
    const seen2 = new Uint8Array(2048);
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            seen2[arr[i] ^ arr[j]] = 1;
        }
    }
    const seen3 = new Uint8Array(2048);
    for (let i = 0; i < 2048; i++) {
        if (seen2[i] === 0) continue;
        for (let j = 0; j < n; j++) {
            seen3[i ^ arr[j]] = 1;
        }
    }
    return seen3.reduce((s, e) => s + e);
}
