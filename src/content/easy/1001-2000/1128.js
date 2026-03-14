// 1128 - Number of Equivalent Domino Pairs

function numEquivDominoPairs(dominoes) {
    let res = 0;
    const B = new Uint16Array(100);
    for (let i = 0; i < dominoes.length; i++) {
        const a = Math.min(...dominoes[i]);
        const b = Math.max(...dominoes[i]);
        res += B[10 * a + b]++;
    }
    return res;
}
