// 3589 - Count Prime-Gap Balanced Subarrays

function primeSubarray(nums, k) {
    function init() {
        dict = new Uint8Array(50001), dict[1] = 1;
        for (let i = 2; i < 50001; i++) {
            if (dict[i]) continue;
            for (let j = i * i; j < 50001; j += i) {
                dict[j] = 1;
            }
        }
        arr = new Uint16Array(50000);
        Q1 = new Uint16Array(50000);
        Q2 = new Uint16Array(50000);
    }
    if (!this.dict) init();
    let i = -1, j = 0;
    while (++i < nums.length) if (dict[nums[i]] === 0) arr[j++] = i;
    let res = 0, l1 = 0, r1 = 0, l2 = 0, r2 = 0, l3 = 0, r3 = -1;
    while (++r3 < j) {
        while (l1 < r1 && nums[arr[Q1[r1 - 1]]] >= nums[arr[r3]]) r1--;
        while (l2 < r2 && nums[arr[Q2[r2 - 1]]] <= nums[arr[r3]]) r2--;
        Q1[r1++] = Q2[r2++] = r3;
        while (nums[arr[Q2[l2]]] - nums[arr[Q1[l1]]] > k) {
            if (Q1[l1] === l3) l1++;
            if (Q2[l2] === l3) l2++;
            l3++;
        }
        if (l3 >= r3) continue;
        const left = arr[r3 - 1] - (l3 ? arr[l3 - 1] : -1);
        const right = (r3 + 1 < j ? arr[r3 + 1] : nums.length) - arr[r3];
        res += left * right;
    }
    return res;
}
