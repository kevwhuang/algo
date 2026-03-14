// 696 - Count Binary Substrings

function countBinarySubstrings(s) {
    let substrings = 0, prev = 0, cur = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) cur++;
        else {
            substrings += Math.min(cur, prev);
            prev = cur;
            cur = 1;
        }
    }
    return substrings + Math.min(cur, prev);
}
