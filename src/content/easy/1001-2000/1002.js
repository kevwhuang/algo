// 1002 - Find Common Characters

function commonChars(words) {
    const B = new Uint8Array(26);
    const arr = new Uint8Array(26).fill(100);
    for (let i = 0; i < words.length; i++) {
        B.fill(0);
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            B[s.charCodeAt(j) - 97]++;
        }
        for (let j = 0; j < 26; j++) {
            arr[j] = Math.min(B[j], arr[j]);
        }
    }
    const res = [];
    for (let i = 0; i < 26; i++) {
        while (arr[i]--) res.push(String.fromCharCode(i + 97));
    }
    return res;
}
