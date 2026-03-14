// 1653 - Minimum Deletions to Make String Balanced

function minimumDeletions(s) {
    let res = 0, acc = 0, i = 0;
    while (i < s.length) {
        if (s[i++] === 'b') acc++;
        else if (acc) res++, acc--;
    }
    return res;
}
