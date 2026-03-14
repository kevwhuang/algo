// 1228 - Missing Number in Arithmetic Progression

function missingNumber(arr) {
    const step = (arr.at(-1) - arr[0]) / arr.length;
    if (!step) return arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + step !== arr[i]) return arr[i - 1] + step;
    }
}
