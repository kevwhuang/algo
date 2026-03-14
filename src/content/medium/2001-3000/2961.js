// 2961 - Double Modular Exponentiation

function getGoodIndices(variables, target) {
    target = BigInt(target);
    const indices = [];
    for (let i = 0; i < variables.length; i++) {
        const a = BigInt(variables[i][0]);
        const b = BigInt(variables[i][1]);
        const c = BigInt(variables[i][2]);
        const m = BigInt(variables[i][3]);
        if ((a ** b % 10n) ** c % m === target) indices.push(i);
    }
    return indices;
}
