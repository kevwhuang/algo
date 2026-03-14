// 370 - Range Addition

function getModifiedArray(length, updates) {
    const arr = new Array(length + 1).fill(0);
    for (let i = 0; i < updates.length; i++) {
        arr[updates[i][0]] += updates[i][2];
        arr[updates[i][1] + 1] -= updates[i][2];
    }
    for (let i = 1; i < length; i++) {
        arr[i] += arr[i - 1];
    }
    arr.pop();
    return arr;
}
