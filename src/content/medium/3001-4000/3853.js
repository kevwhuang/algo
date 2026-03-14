// 3853 - Merge Close Characters

function mergeCharacters(s, k) {
    let res = '';
    const A = new Int8Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 97;
        if (~A[key] && res.length - A[key] <= k) continue;
        res += s[i], A[key] = res.length - 1;
    }
    return res;
}
