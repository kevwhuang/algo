// 3030 - Find the Grid of Region Average

function resultGrid(image, threshold) {
    function isRegion(r, c) {
        for (let i = 0; i < 12; i++) {
            const pixel1 = image[r + dirs1[i][0]][c + dirs1[i][1]];
            const pixel2 = image[r + dirs1[i][2]][c + dirs1[i][3]];
            if (Math.abs(pixel1 - pixel2) > threshold) return false;
        }
        return true;
    }
    function getSum(r, c) {
        return r < 0 || r >= m || c < 0 || c >= n ? 0 : prefixSum[r][c];
    }
    const m = image.length, n = image[0].length;
    const prefixSum = Array.from({ length: m }, () => new Uint32Array(n));
    for (let r = 0; r < m; r++) {
        prefixSum[r][0] = image[r][0];
    }
    for (let r = 0; r < m; r++) {
        for (let c = 1; c < n; c++) {
            prefixSum[r][c] = prefixSum[r][c - 1] + image[r][c];
        }
    }
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            prefixSum[r][c] += prefixSum[r - 1][c];
        }
    }
    const regions = Array.from({ length: m }, () => new Uint8Array(n));
    const cumulative = Array.from({ length: m }, () => new Uint16Array(n));
    const dirs1 = [
        [0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 2], [0, 1, 1, 1],
        [0, 2, 1, 2], [1, 0, 1, 1], [1, 0, 2, 0], [1, 1, 1, 2],
        [1, 1, 2, 1], [1, 2, 2, 2], [2, 0, 2, 1], [2, 1, 2, 2],
    ];
    const dirs2 = [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2],
    ];
    const bound1 = m - 2, bound2 = n - 2;
    for (let r = 0; r < bound1; r++) {
        for (let c = 0; c < bound2; c++) {
            if (!isRegion(r, c)) continue;
            let regionSum = prefixSum[r + 2][c + 2] + getSum(r - 1, c - 1);
            regionSum -= getSum(r - 1, c + 2) + getSum(r + 2, c - 1);
            const regionAvg = regionSum / 9 >> 0;
            for (let i = 0; i < 9; i++) {
                const rr = r + dirs2[i][0], cc = c + dirs2[i][1];
                regions[rr][cc]++;
                cumulative[rr][cc] += regionAvg;
            }
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (!regions[r][c]) continue;
            image[r][c] = cumulative[r][c] / regions[r][c] >> 0;
        }
    }
    return image;
}
