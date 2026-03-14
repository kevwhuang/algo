// 3219 - Minimum Cost for Cutting Cake II

function minimumCost(m, n, horizontalCut, verticalCut) {
    m--, n--;
    let res = 0, i = 0, j = 0;
    const arr1 = horizontalCut.sort((a, b) => b - a);
    const arr2 = verticalCut.sort((a, b) => b - a);
    while (i < m && j < n) {
        res += arr1[i] > arr2[j] ? arr1[i++] * (j + 1) : arr2[j++] * (i + 1);
    }
    while (i < m) res += arr1[i++] * (j + 1);
    while (j < n) res += arr2[j++] * (i + 1);
    return res;
}
