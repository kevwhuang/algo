// 3633 - Earliest Finish Time for Land and Water Rides I

function earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration) {
    let res = Infinity, min = Infinity, i = -1, j = -1;
    const arr1 = landStartTime, arr2 = landDuration, m = arr1.length;
    const arr3 = waterStartTime, arr4 = waterDuration, n = arr3.length;
    while (++i < m) min = Math.min(arr1[i] + arr2[i], min);
    while (++j < n) res = Math.min(Math.max(min, arr3[j]) + arr4[j], res);
    min = Infinity, i = -1, j = -1;
    while (++i < n) min = Math.min(arr3[i] + arr4[i], min);
    while (++j < m) res = Math.min(Math.max(min, arr1[j]) + arr2[j], res);
    return res;
}
