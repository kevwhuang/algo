// 2438 - Range Product Queries of Powers

function productQueries(n, queries) {
    const powers = [1];
    let power = 1;
    while (n) {
        if (n & 1) powers.push(power);
        n >>= 1;
        power <<= 1;
    }
    for (let i = 2; i < powers.length; i++) {
        powers[i] *= powers[i - 1];
    }
    const mod = 1000000007;
    for (let i = 0; i < queries.length; i++) {
        queries[i] = powers[queries[i][1] + 1] / powers[queries[i][0]] % mod;
    }
    return queries;
}
