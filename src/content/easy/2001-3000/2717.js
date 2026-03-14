// 2717 - Semi-Ordered Permutation

function semiOrderedPermutation(nums) {
    const first = nums.indexOf(1);
    const last = nums.lastIndexOf(nums.length);
    const ops = nums.length + first - last - 1;
    return first < last ? ops : ops - 1;
}
