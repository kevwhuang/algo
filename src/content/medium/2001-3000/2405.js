// 2405 - Optimal Partition of String

function partitionString(s) {
    let substrings = 1, set = new Set();
    for (let i = 0; i < s.length; i++) {
        set.has(s[i]) && substrings++ && (set = new Set());
        set.add(s[i]);
    }
    return substrings;
}
