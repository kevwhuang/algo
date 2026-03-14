// 835 - Image Overlap

function largestOverlap(img1, img2) {
    const n = img1.length;
    let max = 0;
    for (let dr = -n + 1; dr < n; dr++) {
        for (let dc = -n + 1; dc < n; dc++) {
            let overlap = 0;
            const rBound = Math.min(n, n - dr), cBound = Math.min(n, n - dc);
            for (let r = Math.max(0, -dr); r < rBound; r++) {
                for (let c = Math.max(0, -dc); c < cBound; c++) {
                    overlap += img1[r + dr][c + dc] * img2[r][c];
                }
            }
            max = Math.max(overlap, max);
        }
    }
    return max;
}
