// 3760 - Maximum Substrings With Distinct Start

function maxDistinct(s) {
    const arr = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97] = 1;
    }
    return arr.reduce((s, e) => s + e);
}
