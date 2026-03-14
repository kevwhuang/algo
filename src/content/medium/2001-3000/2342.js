// 2342 - Max Sum of a Pair With Equal Sum of Digits

function maximumSum(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let sum = 0, cur = nums[i];
        while (cur) {
            sum += cur % 10;
            cur = cur / 10 >> 0;
        }
        if (map.has(sum)) {
            const arr = map.get(sum);
            if (nums[i] > arr[0]) {
                arr[1] = arr[0];
                arr[0] = nums[i];
            } else if (nums[i] > arr[1]) {
                arr[1] = nums[i];
            }
        } else {
            map.set(sum, [nums[i], null]);
        }
    }
    let max = -1;
    for (const arr of map.values()) {
        if (arr[1] === null) continue;
        max = Math.max(arr[0] + arr[1], max);
    }
    return max;
}
