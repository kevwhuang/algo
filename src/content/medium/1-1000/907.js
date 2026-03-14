// 907 - Sum of Subarray Minimums

function sumSubarrayMins(arr) {
    arr.push(0);
    let sum = 0;
    const stack = [];
    for (let r = 0; r < arr.length; r++) {
        while (stack.length && arr[stack.at(-1)] >= arr[r]) {
            const l = stack.at(-2) ?? -1;
            const m = stack.pop();
            sum = (sum + arr[m] * (l - m) * (m - r)) % 1000000007;
        }
        stack.push(r);
    }
    return sum;
}
