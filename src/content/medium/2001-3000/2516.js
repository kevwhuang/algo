// 2516 - Take K of Each Character From Left and Right

function takeCharacters(s, k) {
    function count(i, d) {
        s[i] === 'a' ? a += d : s[i] === 'b' ? b += d : c += d;
    }
    if (k === 0) return 0;
    let a = 0, b = 0, c = 0;
    for (let i = 0; i < s.length; i++) {
        count(i, 1);
    }
    const boundA = a - k, boundB = b - k, boundC = c - k;
    if (boundA < 0 || boundB < 0 || boundC < 0) return -1;
    a = 0, b = 0, c = 0;
    let max = 0;
    for (let l = 0, r = 0; r < s.length; r++) {
        count(r, 1);
        while (a > boundA || b > boundB || c > boundC) count(l++, -1);
        max = Math.max(r - l + 1, max);
    }
    return s.length - max;
}
