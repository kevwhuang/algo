// 3223 - Minimum Length of String After Operations

function minimumLength(s) {
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        bucket[s.charCodeAt(i) - 97]++;
    }
    let ops = 0;
    for (let i = 0; i < 26; i++) {
        if (bucket[i] === 0) continue;
        ops += 2 * Math.floor((bucket[i] - 1) / 2);
    }
    return s.length - ops;
}
