// 1762 - Buildings With an Ocean View

function findBuildings(heights) {
    const indices = [];
    let tallest = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > tallest) {
            indices.push(i);
            tallest = heights[i];
        }
    }
    return indices.reverse();
}
