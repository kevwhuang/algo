// 1477 - Find Two Non-Overlapping Subarrays Each With Target Sum

function minSumOfLengths(arr, target) {
    let res = Infinity, min = Infinity, acc = 0;
    const mins = new Array(arr.length);
    for (let l = 0, r = 0; r < arr.length; r++) {
        acc += arr[r];
        while (acc > target) acc -= arr[l++];
        if (acc === target && l) res = Math.min(mins[l - 1] + r - l + 1, res);
        if (acc === target) min = Math.min(r - l + 1, min);
        mins[r] = min;
    }
    return res === Infinity ? -1 : res;
}
