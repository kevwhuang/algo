// 3202 - Find the Maximum Length of Valid Subsequence II

function maximumLength(nums, k) {
    function check(arr1, arr2) {
        if (arr1[0] > arr2[0]) return check(arr2, arr1);
        let acc = 2, i = 0, j = 0;
        const m = arr1.length, n = arr2.length;
        while (true) {
            while (i < m && arr1[i] < arr2[j]) i++;
            if (i === m) break;
            acc++;
            while (j < n && arr1[i] > arr2[j]) j++;
            if (j === n) break;
            acc++;
        }
        res = Math.max(acc, res);
    }
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const mod = nums[i] % k;
        if (!map.has(mod)) map.set(mod, []);
        map.get(mod).push(i);
    }
    const M = [...map.values()].sort((a, b) => b.length - a.length);
    let res = M[0].length;
    for (let i = 0; i < M.length; i++) {
        if (2 * M[i].length <= res) break;
        for (let j = i + 1; j < M.length; j++) {
            if (M[i].length + M[j].length <= res) break;
            check(M[i], M[j]);
        }
    }
    return res;
}
