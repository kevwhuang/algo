// 2964 - Number of Divisible Triplet Sums

function divisibleTripletCount(nums, d) {
    let triplets = 0;
    const map = new Map([[nums[0] % d, 1]]);
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const diff = d - ((nums[i] + nums[j]) % d || d);
            if (map.has(diff)) triplets += map.get(diff);
        }
        const mod = nums[i] % d;
        map.set(mod, (map.get(mod) ?? 0) + 1);
    }
    return triplets;
}
