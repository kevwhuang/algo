// 554 - Brick Wall

function leastBricks(wall) {
    const map = new Map();
    for (let i = 0; i < wall.length; i++) {
        const row = wall[i], len = row.length - 1;
        let index = 0;
        for (let j = 0; j < len; j++) {
            index += row[j];
            map.set(index, map.get(index) + 1 || 1);
        }
    }
    let max = 0;
    for (const freq of map.values()) {
        max = Math.max(freq, max);
    }
    return wall.length - max;
}
