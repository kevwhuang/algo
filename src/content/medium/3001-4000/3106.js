// 3106 - Lexicographically Smallest String After Operations With Constraint

function getSmallestString(s, k) {
    if (k === 0) return s;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        let dist = s.charCodeAt(i) - 97;
        if (dist > 13) dist = 26 - dist;
        if (k >= dist) res += 'a', k -= dist;
        else {
            res += String.fromCharCode(s.charCodeAt(i) - k);
            res += s.slice(i + 1);
            break;
        }
    }
    return res;
}
