// 678 - Valid Parenthesis String

function checkValidString(s) {
    let acc1 = 0, acc2 = 0, i = -1;
    while (~acc2 && ++i < s.length) {
        if (s[i] === '(') acc1++, acc2++;
        else if (s[i] === ')') acc1--, acc2--;
        else acc1--, acc2++;
        acc1 = Math.max(0, acc1);
    }
    return acc1 === 0 && ~acc2;
}
