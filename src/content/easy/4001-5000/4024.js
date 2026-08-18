// 4024. Nearest Available Drone

function nearestDrone(drones, target) {
    let res = -1;
    const x = target[0], y = target[1];
    for (let min = Infinity, i = 0; i < drones.length; i++) {
        const sum = Math.abs(drones[i][0] - x) + Math.abs(drones[i][1] - y);
        if (sum < min && sum <= drones[i][2]) res = i, min = sum;
    }
    return res;
}
