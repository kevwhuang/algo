// 3234 - Count the Number of Substrings With Dominant Ones

function numberOfSubstrings(s) {
    const n = s.length, arr = new Uint16Array(n + 1);
    for (let i = n, pre = n; ~i; i--) {
        if (s[i] === '0') pre = i;
        arr[i] = pre;
    }
    arr[n] = n;
    let substrings = 0;
    for (let i = 0; i < n; i++) {
        let z = Number(s[i] === '0');
        const bound = Math.ceil(Math.sqrt(n - i));
        for (let j = i; j < n && z <= bound; j = arr[j + 1]) {
            const count = arr[j + 1] - i - z - z++ ** 2 + 1;
            if (count < 0) continue;
            substrings += Math.min(count, arr[j + 1] - j);
        }
    }
    return substrings;
}
