// 3442 - Maximum Difference Between Even and Odd Frequency I

function maxDifference(s) {
    const B = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    let max = 0, min = 100;
    for (let i = 0; i < 26; i++) {
        if (B[i] === 0) continue;
        if (B[i] & 1) max = Math.max(B[i], max);
        else min = Math.min(B[i], min);
    }
    return max - min;
}
