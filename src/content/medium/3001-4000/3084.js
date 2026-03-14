// 3084 - Count Substrings Starting and Ending With Given Character

function countSubstrings(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) count++;
    }
    return count * (1 + count) / 2;
}
