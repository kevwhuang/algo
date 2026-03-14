// 1419 - Minimum Number of Frogs Croaking

function minNumberOfFrogs(croakOfFrogs) {
    let count = 0, local = 0;
    let c = 0, r = 0, o = 0, a = 0, k = 0;
    for (let i = 0; i < croakOfFrogs.length; i++) {
        switch (croakOfFrogs.at(i)) {
            case 'c': c++, local++; break;
            case 'r': r++; break;
            case 'o': o++; break;
            case 'a': a++; break;
            default: k++; local--;
        }
        count = Math.max(local, count);
        if (c < r || r < o || o < a || a < k) return -1;
    }
    return c === r && r === o & o === a && a === k ? count : -1;
}
