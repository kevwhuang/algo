// 1915 - Number of Wonderful Substrings

function wonderfulSubstrings(word) {
    const arr = new Uint32Array(1024);
    arr[0] = 1;
    let substrings = 0, mask = 0;
    for (let i = 0; i < word.length; i++) {
        mask ^= 1 << word.charCodeAt(i) - 97;
        substrings += arr[mask]++;
        for (let n = 0; n < 10; n++) {
            substrings += arr[mask ^ 1 << n];
        }
    }
    return substrings;
}
