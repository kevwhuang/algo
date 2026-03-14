// 3164 - Find the Number of Good Pairs II

function numberOfPairs(nums1, nums2, k) {
    let max = 0;
    const map1 = new Map();
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (num > max) max = num;
        map1.set(num, (map1.get(num) ?? 0) + 1);
    }
    const map2 = new Map();
    for (let i = 0; i < nums2.length; i++) {
        const num = k * nums2[i];
        map2.set(num, (map2.get(num) ?? 0) + 1);
    }
    let pairs = 0;
    for (const num of map2.keys()) {
        const freq = map2.get(num);
        for (let n = num; n <= max; n += num) {
            if (map1.has(n)) pairs += map1.get(n) * freq;
        }
    }
    return pairs;
}
