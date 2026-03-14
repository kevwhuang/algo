// 3718 - Smallest Missing Multiple of K

function missingMultiple(nums, k) {
    let res = k;
    const set = new Set(nums);
    while (set.has(res)) res += k;
    return res;
}
