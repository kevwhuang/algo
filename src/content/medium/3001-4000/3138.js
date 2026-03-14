// 3138 - Minimum Length of Anagram Concatenation

function minAnagramLength(s) {
    let size = 1, len = s.length, lim = len / 2;
    while (true) {
        let base = 0, xor, i = 0, j;
        while (i < size) base ^= 69 * s.charCodeAt(i++);
        while (i < len && !xor) {
            xor = base, j = 0;
            while (j++ < size) xor ^= 69 * s.charCodeAt(i++);
        }
        if (!xor) return size;
        while (++size <= lim && len % size) { }
        if (size > lim) return len;
    }
}
