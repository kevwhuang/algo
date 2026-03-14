// 42 - Trapping Rain Water

function trap(height) {
    let res = 0, a = 0, b = 0, l = 0, r = height.length - 1;
    while (l < r) {
        if (height[l] < a) res += a - height[l];
        else a = height[l];
        if (height[r] < b) res += b - height[r];
        else b = height[r];
        if (height[l] < height[r]) l++;
        else r--;
    }
    return res;
}
