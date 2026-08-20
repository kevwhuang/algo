// 3853. Merge Close Characters

function mergeCharacters(s, k) {
    let res = '';
    const A = new Int8Array(26).fill(-101);
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 97;
        if (res.length - A[key] <= k) continue;
        A[key] = res.length, res += s[i];
    }
    return res;
}
