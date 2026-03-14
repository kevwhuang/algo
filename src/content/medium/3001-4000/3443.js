// 3443 - Maximum Manhattan Distance After K Changes

function maxDistance(s, k) {
    let res = 0, a = 0, b = 0, c = 0, d = 0, i = -1;
    while (++i < s.length) {
        if (s[i] === 'N') a++;
        else if (s[i] === 'S') b++;
        else if (s[i] === 'E') c++;
        else d++;
        const sum = Math.abs(a - b) + Math.abs(c - d);
        const min = Math.min(a + b + c + d - sum, k + k);
        res = Math.max(sum + min, res);
    }
    return res;
}
