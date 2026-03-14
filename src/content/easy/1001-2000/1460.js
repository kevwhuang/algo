// 1460 - Make Two Arrays Equal by Reversing Subarrays

function canBeEqual(target, arr) {
    const map = new Map();
    for (let i = 0; i < target.length; i++) {
        map.set(target[i], map.get(target[i]) + 1 || 1);
    }
    for (let i = 0; i < arr.length; i++) {
        const freq = map.get(arr[i]);
        if (!freq) return false;
        map.set(arr[i], freq - 1);
    }
    return true;
}
