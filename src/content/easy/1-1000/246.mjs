// 246 - Strobogrammatic Number

function isStrobogrammatic(num) {
    const veto = new Set(['2', '3', '4', '5', '7']);
    for (let l = 0, r = num.length - 1; l <= r; l++, r--) {
        const s = num[l], t = num[r];
        if (veto.has(s) || veto.has(t)) return false;
        if (s === '6' && t !== '9') return false;
        if (s === '9' && t !== '6') return false;
        if (s !== '6' && s !== '9' && s !== t) return false;
    }
    return true;
}
