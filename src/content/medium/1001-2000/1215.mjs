// 1215 - Stepping Numbers

function countSteppingNumbers(low, high) {
    function backtrack(n) {
        if (n > high) return;
        if (n >= low) obj[n] ??= true;
        const d = n % 10;
        if (d) backtrack(10 * n + d - 1);
        if (d < 9) backtrack(10 * n + d + 1);
    }
    const obj = {};
    for (let n = 0; n <= 9; n++) {
        backtrack(n);
    }
    return Object.keys(obj);
}
