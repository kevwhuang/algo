// 926 - Flip String to Monotone Increasing

function minFlipsMonoIncr(s) {
    let res = 0, acc = 0, i = 0;
    while (i < s.length) {
        if (s[i++] === '1') acc++;
        else if (acc) res++, acc--;
    }
    return res;
}
