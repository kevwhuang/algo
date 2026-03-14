// 320 - Generalized Abbreviation

function generateAbbreviations(word) {
    function backtrack(i, acc, cur) {
        if (i++ === word.length) return res.push(cur + (acc || ''));
        backtrack(i, 0, cur + (acc || '') + word[i - 1]);
        acc ? backtrack(i, acc + 1, cur) : backtrack(i, 1, cur);
    }
    const res = [];
    backtrack(0, 0, '');
    return res;
}
