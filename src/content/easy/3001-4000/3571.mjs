// 3571 - Find the Shortest Superstring II

function shortestSuperstring(s1, s2) {
    function check(s1, s2) {
        const m = s1.length, n = s2.length;
        for (let i = 0; i < m; i++) {
            let j = i, k = 0;
            while (j < m && k < n && s1[j] === s2[k]) j++, k++;
            if (j === m && i + n < res.length) res = s1.slice(0, i) + s2;
            if (k === n && m < res.length) res = s1;
        }
    }
    let res = s1 + s2;
    check(s1, s2);
    check(s2, s1);
    return res;
}
