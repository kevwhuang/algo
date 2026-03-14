// 2568 - Minimum Impossible OR

function minImpossibleOR(nums) {
    const set = new Set(), bound = 2 ** 30;
    for (let n = 1; n <= bound; n *= 2) {
        set.add(n);
    }
    for (let i = 0; i < nums.length; i++) {
        set.delete(nums[i]);
    }
    return set.keys().next().value;
}
