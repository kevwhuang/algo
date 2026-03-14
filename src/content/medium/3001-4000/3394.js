// 3394 - Check If Grid Can Be Cut Into Sections

function checkValidCuts(n, rectangles) {
    function check(i) {
        const M = rectangles.sort((a, b) => a[i] - b[i]);
        let prev = M[0][i + 2], acc = 1, j = 0;
        while (++j < M.length) {
            if (prev <= M[j][i] && ++acc === 3) return true;
            prev = Math.max(M[j][i + 2], prev);
        }
    }
    return check(0) || check(1) || false;
}
