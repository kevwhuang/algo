// 1893 - Check If All the Integers in a Range Are Covered

function isCovered(ranges, left, right) {
    const arr = new Uint8Array(52);
    for (let i = 0; i < ranges.length; i++) {
        arr[ranges[i][0]]++;
        arr[ranges[i][1] + 1]--;
    }
    for (let i = 1; i < 52; i++) {
        arr[i] += arr[i - 1];
    }
    while (left <= right) {
        if (arr[left++] === 0) return false;
    }
    return true;
}
