// 1526 - Minimum Number of Increments on Subarrays to Form a Target Array

function minNumberOperations(target) {
    let res = target[0], i = 0;
    while (++i < target.length) res += Math.max(target[i] - target[i - 1], 0);
    return res;
}
