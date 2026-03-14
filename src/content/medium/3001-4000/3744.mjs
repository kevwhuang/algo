// 3744 - Find Kth Character in Expanded String

function kthCharacter(s, k) {
    const n = s.length;
    let acc = -1, i = 0;
    while (i < n) {
        let d = 0;
        while (i < n && s[i] !== ' ') {
            if ((acc += ++d) >= k) return s[i];
            i++;
        }
        if (s[i++] === ' ' && ++acc === k) return ' ';
    }
}
