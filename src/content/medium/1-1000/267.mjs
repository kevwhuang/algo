// 267 - Palindrome Permutation II

function generatePalindromes(s) {
    function backtrack(i, cur) {
        if (i === bound) {
            if (n % 2 === 0) return res.push(cur + reverse(cur));
            for (let j = 0; j < 26; j++) {
                if (bucket[j] === 0) continue;
                const char = String.fromCharCode(j + 97);
                res.push(cur + char + reverse(cur));
            }
            return;
        }
        for (let j = 0; j < 26; j++) {
            if (bucket[j] < 2) continue;
            const char = String.fromCharCode(j + 97);
            bucket[j] -= 2;
            backtrack(i + 1, cur + char);
            bucket[j] += 2;
        }
    }
    function reverse(str) {
        let res = '', i = bound;
        while (~--i) res += str[i];
        return res;
    }
    const bucket = new Array(26).fill(0);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        bucket[s.charCodeAt(i) - 97]++;
    }
    const res = [], bound = n / 2 >> 0;
    backtrack(0, '');
    return res;
}
