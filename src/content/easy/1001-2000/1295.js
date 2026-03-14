// 1295 - Find Numbers With Even Number of Digits

function findNumbers(nums) {
    let res = 0, i = -1;
    while (++i < nums.length) {
        let acc = 0, num = nums[i];
        while (num) acc++, num = num / 10 >> 0;
        if (acc % 2 === 0) res++;
    }
    return res;
}
