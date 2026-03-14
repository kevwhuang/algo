// 3365 - Rearrange K Substrings to Form Target String

function isPossibleToRearrange(s, t, k) {
    const map = new Map(), d = s.length / k;
    for (let i = 0; i < s.length; i += d) {
        const str = s.slice(i, i + d);
        map.set(str, (map.get(str) ?? 0) + 1);
    }
    for (let i = 0; i < t.length; i += d) {
        const str = t.slice(i, i + d);
        if (!map.get(str)) return false;
        map.set(str, map.get(str) - 1);
    }
    return true;
}
