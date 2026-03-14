// 1465 - Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

function maxArea(h, w, horizontalCuts, verticalCuts) {
    function len(arr, bound) {
        arr.sort((a, b) => a - b);
        let max = Math.max(arr[0], bound - arr[arr.length - 1]);
        for (let i = 1; i < arr.length; i++) {
            max = Math.max(arr[i] - arr[i - 1], max);
        }
        return BigInt(max);
    }
    const mod = BigInt(1e9 + 7);
    return len(horizontalCuts, h) * len(verticalCuts, w) % mod;
}
