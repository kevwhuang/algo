// 3954. Sum of Compatible Numbers in Range I

function sumOfGoodIntegers(n, k) {
    let res = 0;
    for (let i = Math.max(n - k, 1); i <= n + k; i++) {
        if ((n & i) === 0) res += i;
    }
    return res;
}
