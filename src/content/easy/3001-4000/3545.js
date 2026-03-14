// 3545 - Minimum Deletions for at Most K Distinct Characters

function minDeletion(s, k) {
    const B = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    B.sort();
    let res = 0, i = 25 - k;
    while (~i) res += B[i--];
    return res;
}
