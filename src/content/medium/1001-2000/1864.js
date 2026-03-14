// 1864 - Minimum Number of Swaps to Make the Binary String Alternating

function minSwaps(s) {
    let zeros = 0, count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') ++zeros;
        if (s[i] === (i % 2 ? '0' : '1')) ++count;
    }
    if (Math.abs(2 * zeros - s.length) > 1) return -1;
    const swaps = Math.min(count, s.length - count) / 2;
    if (Number.isInteger(swaps)) return swaps;
    return Math.max(count, s.length - count) / 2;
}
