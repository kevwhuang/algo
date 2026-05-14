// 1385. Find the Distance Value Between Two Arrays

function findTheDistanceValue(arr1, arr2, d) {
    let res = 0;
    const m = arr1.length, n = arr2.length;
    for (let i = 0; i < m; i++) {
        let j = 0;
        while (j < n && Math.abs(arr1[i] - arr2[j]) > d) j++;
        if (j === n) res++;
    }
    return res;
}
