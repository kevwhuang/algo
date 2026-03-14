// 2496 - Maximum Value of a String in an Array

function maximumValue(strs) {
    let max = 0;
    for (let i = 0; i < strs.length; i++) {
        const num = Number(strs[i]);
        max = Math.max(isNaN(num) ? strs[i].length : num, max);
    }
    return max;
}
