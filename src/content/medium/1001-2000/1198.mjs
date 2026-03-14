// 1198 - Find Smallest Common Element in All Rows

function smallestCommonElement(mat) {
    function binarySearch(arr, tgt) {
        let l = 0, r = width - 1, m;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if (arr[m] < tgt) l = m + 1;
            else if (arr[m] > tgt) r = m - 1;
            else return true;
        }
        return false;
    }
    const width = mat[0].length;
    loop: for (let i = 0; i < width; i++) {
        for (let r = 1; r < mat.length; r++) {
            if (!binarySearch(mat[r], mat[0][i])) continue loop;
        }
        return mat[0][i];
    }
    return -1;
}
