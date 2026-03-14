// 3495 - Minimum Operations to Make Array Elements Zero

function minOperations(queries) {
    if (!this.dict) dict = Array.from({ length: 16 }, (_, i) => 4 ** i);
    let res = 0;
    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0], b = queries[i][1];
        let acc = 0, exp = Math.log2(a) >> 1;
        while (b >= dict[exp]) {
            const l = Math.max(a, dict[exp++]);
            const r = Math.min(dict[exp] - 1, b);
            acc += (r - l + 1) * exp;
        }
        res += Math.ceil(acc / 2);
    }
    return res;
}
