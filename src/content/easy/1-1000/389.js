// 389 - Find the Difference

function findTheDifference(s, t) {
    let xor = t.charCodeAt(s.length);
    for (let i = 0; i < s.length; i++) {
        xor ^= s.charCodeAt(i) ^ t.charCodeAt(i);
    }
    return String.fromCharCode(xor);
}
