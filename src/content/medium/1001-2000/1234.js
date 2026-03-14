// 1234 - Replace the Substring for Balanced String

function balancedString(s) {
    const obj = { Q: 0, W: 0, E: 0, R: 0 };
    for (let i = 0; i < s.length; i++) {
        obj[s[i]]++;
    }
    for (const char in obj) {
        obj[char] = Math.max(0, obj[char] - s.length / 4);
    }
    const sum = obj.Q + obj.W + obj.E + obj.R;
    if (sum <= 1) return sum;
    let min = s.length, l = 0, r = -1;
    while (++r < s.length) {
        obj[s[r]]--;
        while (l < r && obj[s[l]] < 0) obj[s[l++]]++;
        if (obj.Q > 0 || obj.W > 0) continue;
        if (obj.E > 0 || obj.R > 0) continue;
        min = Math.min(r - l + 1, min);
    }
    return min;
}
