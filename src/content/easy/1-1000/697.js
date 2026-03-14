// 697 - Degree of an Array

function findShortestSubArray(nums) {
    const freqs = {}, indices = {};
    let shortest = Infinity, degree = 0;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (freqs[n]) {
            freqs[n]++;
        } else {
            freqs[n] = 1;
            indices[n] = i;
        }
        const freq = freqs[n];
        if (freq > degree) {
            degree = freq;
            shortest = i - indices[n] + 1;
        } else if (freq === degree) {
            shortest = Math.min(i - indices[n] + 1, shortest);
        }
    }
    return shortest;
}
