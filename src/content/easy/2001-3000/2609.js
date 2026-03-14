// 2609 - Find the Longest Balanced Substring of a Binary String

function findTheLongestBalancedSubstring(s) {
    let max = 0, zeros = 0, ones = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            zeros++;
            if (ones) zeros = 1;
            ones = 0;
        } else {
            if (++ones > zeros) continue;
            max = Math.max(2 * ones, max);
        }
    }
    return max;
}
