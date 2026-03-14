// 1796 - Second Largest Digit in a String

function secondHighest(s) {
    const arr = new Uint8Array(10);
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 48;
        if (0 <= key && key <= 9) arr[key] = 1;
    }
    for (let seen, n = 9; ~n; n--) {
        if (arr[n] === 0) continue;
        if (seen) return n;
        seen = true;
    }
    return -1;
}
