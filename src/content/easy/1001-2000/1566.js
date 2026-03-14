// 1566 - Detect Pattern of Length M Repeated K or More Times

function containsPattern(arr, m, k) {
    L: for (let i = 0; i <= arr.length - m * k; i++) {
        for (let j = i; j < i + m; j++) {
            for (let d = m; d < m * k; d += m) {
                if (arr[j] !== arr[j + d]) continue L;
            }
        }
        return true;
    }
    return false;
}
