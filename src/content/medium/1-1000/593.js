// 593 - Valid Square

function validSquare(p1, p2, p3, p4) {
    const set = new Set();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === j) continue;
            const dx = Math.abs(arguments[i][0] - arguments[j][0]);
            const dy = Math.abs(arguments[i][1] - arguments[j][1]);
            set.add(Math.sqrt(dx ** 2 + dy ** 2));
            if (set.size > 2) return false;
        }
    }
    return !set.has(0);
}
