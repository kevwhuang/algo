// 3722 - Lexicographically Smallest String After Reverse

function lexSmallest(s) {
    let res = s, i = 0;
    while (++i <= s.length) {
        let t1 = '', t2 = s.slice(0, i), j = i - 1;
        while (~j) t1 += s[j--];
        t1 += s.slice(i), j = s.length - 1;
        while (j >= i) t2 += s[j--];
        if (t1 < res) res = t1;
        if (t2 < res) res = t2;
    }
    return res;
}
