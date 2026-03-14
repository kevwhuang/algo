// 1131 - Maximum of Absolute Value Expression

function maxAbsValExpr(arr1, arr2) {
    const INF = Number.MAX_SAFE_INTEGER;
    let max1 = -INF, max2 = -INF, max3 = -INF, max4 = -INF;
    let min1 = INF, min2 = INF, min3 = INF, min4 = INF;
    for (let i = 0; i < arr1.length; i++) {
        const val1 = arr1[i] + arr2[i] + i;
        max1 = Math.max(val1, max1);
        min1 = Math.min(val1, min1);
        const val2 = arr1[i] - arr2[i] + i;
        max2 = Math.max(val2, max2);
        min2 = Math.min(val2, min2);
        const val3 = -arr1[i] + arr2[i] + i;
        max3 = Math.max(val3, max3);
        min3 = Math.min(val3, min3);
        const val4 = -arr1[i] - arr2[i] + i;
        max4 = Math.max(val4, max4);
        min4 = Math.min(val4, min4);
    }
    return Math.max(max1 - min1, max2 - min2, max3 - min3, max4 - min4);
}
