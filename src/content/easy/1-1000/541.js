// 541 - Reverse String II

function reverseStr(s, k) {
    function swap(start, end) {
        while (start < end) {
            [s[start++], s[end--]] = [s[end], s[start]];
        }
    }
    s = s.split('');
    let pos = 0;
    while (pos < s.length) {
        swap(pos, Math.min(pos + k - 1, s.length - 1));
        pos += 2 * k;
    }
    return s.join('');
}
