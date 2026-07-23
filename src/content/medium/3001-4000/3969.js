// 3969. Valid Subarrays With Matching Sum Digits I

function countValidSubarrays(nums, x) {
    if (!this.M) M = new Array(10);
    M[0] = [0];
    for (let i = 1; i < 10; i++) {
        M[i] = [];
    }
    let res = 0, acc = 0;
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        M[acc % 10].push(acc);
        const A = M[(acc % 10 - x + 10) % 10];
        for (let j = 0; j < A.length; j++) {
            let cur = acc - A[j];
            while (cur > 9) cur = Math.floor(cur / 10);
            if (cur === x) res++;
        }
    }
    return res;
}
