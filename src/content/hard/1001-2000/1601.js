// 1601 - Maximum Number of Achievable Transfer Requests

function maximumRequests(n, requests) {
    function backtrack(i, acc) {
        if (i === m && !A.some(Boolean)) res = Math.max(acc, res);
        if (i === m) return;
        const a = requests[i][0], b = requests[i][1];
        backtrack(i + 1, acc);
        A[a]++, A[b]--;
        backtrack(i + 1, acc + 1);
        A[a]--, A[b]++;
    }
    let res = 0;
    const A = new Array(n).fill(0);
    const m = requests.length;
    backtrack(0, 0);
    return res;
}
