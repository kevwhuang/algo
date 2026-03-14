// 2626 - Array Reduce Transformation

function reduce(nums, fn, init) {
    nums.forEach(e => init = fn(init, e));
    return init;
}
