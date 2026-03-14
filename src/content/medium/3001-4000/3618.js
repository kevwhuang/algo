// 3618 - Split Array by Prime Indices

function splitArray(nums) {
    function init() {
        dict = new Uint8Array(500001), dict[0] = dict[1] = 1;
        for (let i = 2; i < 500001; i++) {
            if (dict[i]) continue;
            for (let j = i * i; j < 500001; j += i) {
                dict[j] = 1;
            }
        }
    }
    if (!this.dict) init();
    let sum1 = 0, sum2 = 0, i = -1;
    while (++i < nums.length) {
        if (dict[i]) sum1 += nums[i];
        else sum2 += nums[i];
    }
    return Math.abs(sum1 - sum2);
}
