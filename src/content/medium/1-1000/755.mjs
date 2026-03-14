// 755 - Pour Water

function pourWater(heights, volume, k) {
    for (let n = 1; n <= volume; n++) {
        let l = k, minLeft = k;
        while (heights[--l] <= heights[minLeft]) {
            if (heights[l] < heights[minLeft]) minLeft = l;
        }
        if (minLeft !== k) {
            heights[minLeft]++;
            continue;
        }
        let r = k, minRight = k;
        while (heights[minRight] >= heights[++r]) {
            if (heights[minRight] > heights[r]) minRight = r;
        }
        if (minRight !== k) heights[minRight]++;
        else heights[k]++;
    }
    return heights;
}
