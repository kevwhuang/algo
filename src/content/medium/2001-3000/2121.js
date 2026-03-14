// 2121 - Intervals Between Identical Elements

function getDistances(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) map.get(arr[i]).push(i);
        else map.set(arr[i], [i]);
    }
    for (const num of map.keys()) {
        const indices = map.get(num);
        let leftSum = 0, rightSum = indices.reduce((s, e) => s + e);
        const len = indices.length;
        for (let i = 0; i < len; i++) {
            const index = indices[i];
            rightSum -= index;
            arr[index] = index * (i + i + 1 - len) + rightSum - leftSum;
            leftSum += index;
        }
    }
    return arr;
}
