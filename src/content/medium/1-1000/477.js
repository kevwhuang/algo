// 477 - Total Hamming Distance

function totalHammingDistance(nums) {
    const ones = new Array(33).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i], bit = 1;
        while (num) {
            if (num & 1) ones[bit]++;
            num >>= 1;
            bit++;
        }
    }
    return ones.reduce((s, e) => s + e * (nums.length - e));
}
