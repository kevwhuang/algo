// 264 - Ugly Number II

function nthUglyNumber(n) {
    function init() {
        nums = [1];
        let p2 = 0, p3 = 0, p5 = 0;
        while (nums.length < 1690) {
            const next = Math.min(2 * nums[p2], 3 * nums[p3], 5 * nums[p5]);
            nums.push(next);
            if (next === 2 * nums[p2]) p2++;
            if (next === 3 * nums[p3]) p3++;
            if (next === 5 * nums[p5]) p5++;
        }
    }
    if (this.nums === undefined) init();
    return nums[n - 1];
}
