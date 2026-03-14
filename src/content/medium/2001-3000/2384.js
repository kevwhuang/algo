// 2384 - Largest Palindromic Number

function largestPalindromic(num) {
    const bucket = new Array(10).fill(0);
    for (let i = 0; i < num.length; i++) {
        bucket[num[i]]++;
    }
    const res = [];
    for (let n = 9; n; n--) {
        if (bucket[n] < 2) continue;
        res.push(n.toString().repeat(bucket[n] >> 1));
        bucket[n] %= 2;
    }
    if (bucket[0] && res.length) {
        res.push('0'.repeat(bucket[0] >> 1));
        bucket[0] %= 2;
    }
    let i = res.length - 1;
    for (let n = 9; n >= 0; n--) {
        if (bucket[n] === 0) continue;
        res.push(n);
        break;
    }
    while (i >= 0) res.push(res[i--]);
    return res.join('');
}
