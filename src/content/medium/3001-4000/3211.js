// 3211 - Generate Binary Strings Without Adjacent Zeros

function validStrings(n) {
    function backtrack(str) {
        if (str.length === n) return res.push(str);
        if (str.at(-1) === '1') backtrack(str + '0');
        backtrack(str + '1');
    }
    const res = [];
    backtrack('0');
    backtrack('1');
    return res;
}
