// 3707 - Equal Score Substrings

function scoreBalance(s) {
    let right = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        right += s.charCodeAt(i) - 96;
    }
    for (let left = 0, i = 0; i < n; i++) {
        left += s.charCodeAt(i) - 96;
        right -= s.charCodeAt(i) - 96;
        if (left === right) return true;
    }
    return false;
}
