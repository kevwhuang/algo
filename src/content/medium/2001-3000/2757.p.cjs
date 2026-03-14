// 2757 - Generate Circular Array Values

function* cycleGenerator(arr, startIndex) {
    const n = arr.length;
    while (true) {
        const d = yield arr[startIndex];
        startIndex = (startIndex + n + d % n) % n;
    }
}
