// 3794 - Reverse String Prefix

function reversePrefix(s, k) {
    let res = '', i = 0;
    while (i < k) res = s[i++] + res;
    return res + s.slice(k);
}
