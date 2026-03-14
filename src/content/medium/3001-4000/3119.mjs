// 3119 - Maximum Number of Potholes That Can Be Fixed

function maxPotholes(road, budget) {
    const arr = [];
    for (let i = 0; i < road.length; i++) {
        if (road[i] === '.') continue;
        let potholes = 0;
        while (road[i] === 'x') potholes++, i++;
        arr.push(potholes);
    }
    arr.sort((a, b) => b - a);
    let repaired = 0;
    for (let i = 0; i < arr.length; i++) {
        if (--budget <= 0) break;
        const potholes = Math.min(arr[i], budget);
        repaired += potholes;
        budget -= potholes;
    }
    return repaired;
}
