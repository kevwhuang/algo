// 1237 - Find Positive Integer Solution for a Given Equation

function findSolution(customfunction, z) {
    const pairs = [];
    for (let x = 1; x <= 1000; x++) {
        for (let y = 1; y <= 1000; y++) {
            const int = customfunction.f(x, y);
            if (int > z && y === 1) return pairs;
            if (int === z) pairs.push([x, y]);
            if (int >= z) break;
        }
    }
    return pairs;
}
