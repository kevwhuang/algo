// 1497 - Check If Array Pairs Are Divisible by K

function canArrange(arr, k) {
    const bucket = new Uint32Array(k);
    for (let i = 0; i < arr.length; i++) {
        bucket[(arr[i] % k + k) % k]++;
    }
    if (bucket[0] & 1) return false;
    let l = 1, r = k - 1;
    while (l <= r) {
        if (bucket[l++] !== bucket[r--]) return false;
    }
    return true;
}
