// 1461 - Check If a String Contains All Binary Codes of Size K

function hasAllCodes(s, k) {
    let window = parseInt(s.slice(0, k), 2);
    const set = new Set([window]);
    const mask = parseInt('1'.repeat(k), 2);
    const target = 2 ** k;
    for (let i = k; i < s.length; i++) {
        window = window << 1 & mask | +s[i];
        set.add(window);
        if (set.size === target) return true;
    }
    return false;
}
