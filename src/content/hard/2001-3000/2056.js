// 2056 - Number of Valid Move Combinations on Chessboard

function countCombinations(pieces, positions) {
    function init() {
        dict = { r: [[-1, 0], [1, 0], [0, -1], [0, 1]] };
        dict.b = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        dict.q = dict.r.concat(dict.b);
        arr1 = Array.from({ length: 4 }, () => new Int8Array(5));
        arr2 = Array.from({ length: 4 }, () => new Uint8Array(2));
    }
    function backtrack(i) {
        if (i === n) {
            const max = arr1.reduce((s, e) => Math.max(e[4], s), 0);
            for (let d = 0; d <= max; d++) {
                for (let j = 0; j < n; j++) {
                    const cur = arr1[j], min = Math.min(cur[4], d);
                    arr2[j][0] = cur[0] + cur[2] * min;
                    arr2[j][1] = cur[1] + cur[3] * min;
                }
                for (let j = 0; j < n; j++) {
                    const r = arr2[j][0], c = arr2[j][1];
                    for (let k = j + 1; k < n; k++) {
                        if (r === arr2[k][0] && c === arr2[k][1]) return;
                    }
                }
            }
            return ++res;
        }
        const cur = arr1[i], r = positions[i][0], c = positions[i][1];
        cur[0] = r, cur[1] = c, cur[2] = cur[3] = cur[4] = 0;
        backtrack(i + 1);
        const D = dict[pieces[i][0]];
        for (let j = 0; j < D.length; j++) {
            const dr = D[j][0], dc = D[j][1];
            let rr = r + dr, cc = c + dc, d = 0;
            while (rr && rr < 9 && cc && cc < 9) {
                cur[0] = r, cur[1] = c, cur[2] = dr, cur[3] = dc, cur[4] = ++d;
                rr += dr, cc += dc;
                backtrack(i + 1);
            }
        }
    }
    if (!this.dict) init();
    let res = 0;
    const n = pieces.length;
    backtrack(0);
    return res;
}
