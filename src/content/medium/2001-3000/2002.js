// 2002 - Maximum Product of the Length of Two Palindromic Subsequences

function maxProduct(s) {
    const arr1 = [], arr2 = [];
    const dict = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
    const tgt = dict[s.length];
    for (let mask = 1; mask < tgt; mask++) {
        let i = 0, j = 31 - Math.clz32(mask);
        while (i < j) {
            if (!(dict[i] & mask)) i++;
            else if (!(dict[j] & mask)) j--;
            else if (s[i] === s[j]) i++, j--;
            else break;
        }
        if (i < j) continue;
        let acc = 0, cur = mask;
        while (cur) acc += cur & 1, cur >>= 1;
        arr1.push(mask);
        arr2.push(acc);
    }
    let res = 1;
    const n = arr1.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr1[i] & arr1[j]) continue;
            res = Math.max(arr2[i] * arr2[j], res);
        }
    }
    return res;
}
