// 3489 - Zero Array Transformation IV

function minZeroArray(nums, queries) {
    let res = 0, i = -1;
    while (++i < nums.length) {
        if (nums[i] === 0) continue;
        const set = new Set([nums[i]]);
        let j = -1;
        while (++j < queries.length) {
            if (queries[j][0] > i || queries[j][1] < i) continue;
            const arr = [...set], d = queries[j][2];
            for (let k = 0; k < arr.length; k++) {
                const sum = arr[k] - d;
                if (sum > 0) set.add(sum);
                if (sum) continue;
                res = Math.max(j + 1, res), j = Infinity;
                break;
            }
        }
        if (j < Infinity) return -1;
    }
    return res;
}
