// 1854 - Maximum Population Year

function maximumPopulation(logs) {
    const B = new Uint8Array(101);
    for (let i = 0; i < logs.length; i++) {
        const n = logs[i][1];
        for (let j = logs[i][0]; j < n; j++) {
            B[j - 1950]++;
        }
    }
    let res = 0;
    for (let i = 0; i < 101; i++) {
        if (B[i] > B[res]) res = i;
    }
    return res + 1950;
}
