// 1758 - Minimum Changes to Make Alternating Binary String

function minOperations(s) {
    let acc1 = 0, acc2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i & 1) s[i] === '0' ? acc1++ : acc2++;
        else s[i] === '0' ? acc2++ : acc1++;
    }
    return Math.min(acc1, acc2);
}
