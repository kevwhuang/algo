// 2001 - Number of Pairs of Interchangeable Rectangles

function interchangeableRectangles(rectangles) {
    let pairs = 0;
    const map = new Map();
    for (let i = 0; i < rectangles.length; i++) {
        const ratio = rectangles[i][0] / rectangles[i][1];
        const freq = map.get(ratio) ?? 0;
        pairs += freq;
        map.set(ratio, freq + 1);
    }
    return pairs;
}
