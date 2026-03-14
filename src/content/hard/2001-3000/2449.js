// 2449 - Minimum Number of Operations to Make Arrays Similar

function makeSimilar(nums, target) {
    let res = 0, i = 0, j = 0, k = 0;
    const arr1 = new Uint32Array(nums).sort();
    const arr2 = new Uint32Array(target).sort();
    while (i < nums.length) {
        while (arr2[j] % 2 === 0) j++;
        while (arr2[k] % 2) k++;
        res += Math.max(0, arr1[i] - arr2[arr1[i++] % 2 ? j++ : k++]);
    }
    return res / 2;
}
