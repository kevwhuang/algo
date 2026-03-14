// 826 - Most Profit Assigning Work

function maxProfitAssignment(difficulty, profit, worker) {
    worker.sort((a, b) => b - a);
    const A = new Array(difficulty.length);
    for (let i = 0; i < A.length; i++) {
        A[i] = [difficulty[i], profit[i]];
    }
    A.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    let max = A[A.length - 1][1];
    for (let i = A.length - 2; ~i; i--) {
        max = Math.max(A[i][1], max);
        A[i][1] = max;
    }
    let res = 0, i = -1, j = 0;
    while (++i < A.length && j < worker.length) {
        while (j < worker.length && A[i][0] <= worker[j]) {
            res += A[i][1], j++;
        }
    }
    return res;
}
