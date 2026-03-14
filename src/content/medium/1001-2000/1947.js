// 1947 - Maximum Compatibility Score Sum

function maxCompatibilitySum(students, mentors) {
    function backtrack(i, acc) {
        if (i === n) return max = Math.max(acc, max);
        for (let j = 0; j < n; j++) {
            if (seen[j]) continue;
            seen[j] = true;
            backtrack(i + 1, acc + mat[i][j]);
            seen[j] = false;
        }
    }
    const n = students.length, m = students[0].length;
    const mat = Array.from({ length: n }, () => new Uint8Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
                if (students[i][k] === mentors[j][k]) mat[i][j]++;
            }
        }
    }
    let max = 0;
    const seen = new Array(n);
    backtrack(0, 0);
    return max;
}
