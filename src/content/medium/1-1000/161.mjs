// 161 - One Edit Distance

function isOneEditDistance(s, t) {
    const diff = Math.abs(s.length - t.length);
    if (diff > 1) return false;
    let edited = false;
    if (diff) {
        if (s.length < t.length) {
            const swap = s;
            s = t, t = swap;
        }
        for (let i = 0, j = 0; i < s.length; i++, j++) {
            if (s.charAt(i) === t.charAt(j)) continue;
            if (edited) return false;
            edited = true;
            j--;
        }
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === t.charAt(i)) continue;
            if (edited) return false;
            edited = true;
        }
    }
    return edited;
}
