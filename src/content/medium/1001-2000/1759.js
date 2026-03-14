// 1759 - Count Number of Homogenous Substrings

function countHomogenous(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let n = 1;
        while (char === s[i + 1]) {
            n++;
            i++;
        }
        count += (1 + n) * n / 2;
    }
    return count % (1e9 + 7);
}
