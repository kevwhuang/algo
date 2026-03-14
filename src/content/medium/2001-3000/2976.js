// 2976 - Minimum Cost to Convert String I

function minimumCost(source, target, original, changed, cost) {
    const mapper = () => new Array(26).fill(Infinity);
    const fw = Array.from({ length: 26 }, mapper);
    for (let i = 0; i < original.length; i++) {
        const code1 = original[i].charCodeAt() - 97;
        const code2 = changed[i].charCodeAt() - 97;
        fw[code1][code2] = Math.min(cost[i], fw[code1][code2]);
    }
    for (let n = 0; n < 26; n++) {
        fw[n][n] = 0;
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                fw[i][j] = Math.min(fw[i][n] + fw[n][j], fw[i][j]);
            }
        }
    }
    let res = 0;
    for (let i = 0; i < source.length; i++) {
        const code1 = source.charCodeAt(i) - 97;
        const code2 = target.charCodeAt(i) - 97;
        res += fw[code1][code2];
        if (res === Infinity) return -1;
    }
    return res;
}
