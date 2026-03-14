// 978 - Longest Turbulent Subarray

function maxTurbulenceSize(arr) {
    let max = 1, i = 1;
    while (i < arr.length) {
        if (arr[i - 1] === arr[i] && ++i) continue;
        let len = 2, sign = arr[i - 1] < arr[i];
        while (++i < arr.length) {
            if (sign && arr[i - 1] <= arr[i]) break;
            if (!sign && arr[i - 1] >= arr[i]) break;
            len++, sign = !sign;
        }
        max = Math.max(len, max);
    }
    return max;
}
