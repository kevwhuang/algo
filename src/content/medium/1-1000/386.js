// 386 - Lexicographical Numbers

function lexicalOrder(n) {
    function generate(cur, start, end) {
        for (let d = start; d <= end; d++) {
            const next = 10 * cur + d;
            if (next > n) break;
            res[i++] = next;
            generate(next, 0, 9);
        }
    }
    const res = new Uint16Array(n);
    let i = 0;
    generate(0, 1, 9);
    return res;
}
