// 2191 - Sort the Jumbled Numbers

function sortJumbled(mapping, nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i], k = 1;
        let mappedNum = num ? 0 : mapping[0];
        while (num) {
            mappedNum += k * mapping[num % 10];
            k *= 10;
            num = num / 10 >> 0;
        }
        map.set(nums[i], mappedNum);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b));
}
