// 1213 - Intersection of Three Sorted Arrays

function arraysIntersection(arr1, arr2, arr3) {
    function search(arr, tgt) {
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] < tgt) l = m + 1;
            else if (arr[m] > tgt) r = m - 1;
            else return m;
        }
        return -1;
    }
    return arr1.filter(e => ~search(arr2, e) && ~search(arr3, e));
}
