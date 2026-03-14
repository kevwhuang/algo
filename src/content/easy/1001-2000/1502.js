// 1502 - Can Make Arithmetic Progression From Sequence

function canMakeArithmeticProgression(arr) {
    arr = new Int32Array(arr).sort();
    const d = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) return false;
    }
    return true;
}
