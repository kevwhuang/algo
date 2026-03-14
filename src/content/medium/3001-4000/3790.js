// 3790 - Smallest All-Ones Multiple

function minAllOneMultiple(k) {
    if (k % 2 === 0 || k % 5 === 0) return -1;
    let res = 1, cur = 1;
    while (cur) res++, cur = (10 * cur + 1) % k;
    return res;
}
