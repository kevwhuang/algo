// 821 - Shortest Distance to a Character

function shortestToChar(s, c) {
    const distances = new Array(s.length);
    let l = -1, r = s.indexOf(c);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            distances[i] = 0;
            [l, r] = [r, s.indexOf(c, i + 1)];
        } else if (l === -1) {
            distances[i] = r - i;
        } else if (r === -1) {
            distances[i] = i - l;
        } else {
            distances[i] = Math.min(r - i, i - l);
        }
    }
    return distances;
}
