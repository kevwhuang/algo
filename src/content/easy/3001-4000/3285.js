// 3285 - Find Indices of Stable Mountains

function stableMountains(height, threshold) {
    height.pop();
    const res = [];
    for (let i = 0; i < height.length; i++) {
        if (height[i] > threshold) res.push(i + 1);
    }
    return res;
}
