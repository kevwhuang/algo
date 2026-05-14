// 3886. Sum of Sortable Integers

function sortableIntegers(nums) {
    let res = 0;
    const n = nums.length;
    L: for (let d = 1; d <= n; d++) {
        if (n % d) continue;
        for (let max1 = 0, i = 0; i < n; i += d) {
            let max2 = 0, flag;
            const ii = i + d;
            for (let j = i; j < ii; j++) {
                const cur = nums[j];
                if (cur < max1) continue L;
                max2 = Math.max(cur, max2);
                if (j === i || cur >= nums[j - 1]) continue;
                if (flag) continue L;
                flag = true;
            }
            if (flag && nums[i] < nums[i + d - 1]) continue L;
            max1 = max2;
        }
        res += d;
    }
    return res;
}
