// 3083 - Existence of a Substring in a String and Its Reverse

function isSubstringPresent(s) {
    const set = new Set();
    for (let i = 0; i < s.length - 1; i++) {
        set.add(s.slice(i, i + 2));
    }
    for (let i = s.length - 2; i >= 0; i--) {
        if (set.has(s[i + 1] + s[i])) return true;
    }
    return false;
}
