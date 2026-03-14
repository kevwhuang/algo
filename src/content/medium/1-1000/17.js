// 17 - Letter Combinations of a Phone Number

function letterCombinations(digits) {
    function dfs(i, cur) {
        if (i === digits.length) return res.push(cur);
        const s = dict[digits[i] - 2];
        for (let j = 0; j < s.length; j++) {
            dfs(i + 1, cur + s[j]);
        }
    }
    if (digits.length === 0) return [];
    const res = [];
    const dict = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    dfs(0, '');
    return res;
}
