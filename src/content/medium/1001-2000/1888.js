// 1888 - Minimum Number of Flips to Make the Binary String Alternating

function minFlips(s) {
    const obj = { 0: [0, 0], 1: [0, 0] }, n = s.length;
    for (let i = 0; i < n; i++) {
        obj[s[i]][i % 2]++;
    }
    let min = Math.min(obj[0][0] + obj[1][1], obj[0][1] + obj[1][0]);
    if (n % 2 === 0) return min;
    for (let i = 0; i < n; i++) {
        obj[s[i]][i % 2]--;
        obj[s[i]][(i + n) % 2]++;
        min = Math.min(obj[0][0] + obj[1][1], obj[0][1] + obj[1][0], min);
    }
    return min;
}
