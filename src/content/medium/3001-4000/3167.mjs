// 3167 - Better Compression of String

function betterCompression(compressed) {
    const bucket = new Array(26).fill(0);
    let i = 0;
    while (i < compressed.length) {
        const code = compressed.charCodeAt(i++) - 97;
        let count = 0;
        while (compressed[i] < 'a') {
            count = 10 * count + Number(compressed[i++]);
        }
        bucket[code] += count;
    }
    let res = '';
    for (let i = 0; i < 26; i++) {
        if (bucket[i] === 0) continue;
        res += String.fromCharCode(i + 97) + bucket[i];
    }
    return res;
}
