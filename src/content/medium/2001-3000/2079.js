// 2079 - Watering Plants

function wateringPlants(plants, capacity) {
    let steps = 0, remaining = capacity;
    for (let i = 0; i < plants.length; i++) {
        if (remaining < plants[i]) {
            steps += i * 2;
            remaining = capacity;
        }
        steps++;
        remaining -= plants[i];
    }
    return steps;
}
