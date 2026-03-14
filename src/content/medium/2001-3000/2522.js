// 2522 - Partition String Into Substrings With Values at Most K

function minimumPartition(s, k) {
    let substrings = 1, window = 0;
    for (let i = 0; i < s.length; i++) {
        window = 10 * window + Number(s[i]);
        if (window <= k) continue;
        substrings++, window = Number(s[i]);
        if (window > k) return -1;
    }
    return substrings;
}
