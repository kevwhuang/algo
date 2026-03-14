// 1718 - Construct the Lexicographically Largest Valid Sequence

function constructDistancedSequence(n) {
    function backtrack(i) {
        if (i === seq.length) return true;
        if (seq[i]) return backtrack(i + 1);
        for (let num = n; num; num--) {
            if (seq.includes(num)) continue;
            if (num === 1) {
                seq[i] = 1;
                if (backtrack(i + 1)) return true;
                seq[i] = 0;
            } else if (i + num < seq.length && seq[i + num] === 0) {
                seq[i] = seq[i + num] = num;
                if (backtrack(i + 1)) return true;
                seq[i] = seq[i + num] = 0;
            }
        }
    }
    const seq = new Array(n + n - 1).fill(0);
    backtrack(0);
    return seq;
}
