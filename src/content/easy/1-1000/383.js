// 383 - Ransom Note

function canConstruct(ransomNote, magazine) {
    const m = magazine.length, n = ransomNote.length;
    if (m < n) return false;
    const B = new Uint32Array(26);
    for (let i = 0; i < m; i++) {
        B[magazine.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < n; i++) {
        if (B[ransomNote.charCodeAt(i) - 97]-- === 0) return false;
    }
    return true;
}
