// 874 - Walking Robot Simulation

function robotSim(commands, obstacles) {
    const map = new Map();
    for (let i = 0; i < obstacles.length; i++) {
        const x = obstacles[i][0], y = obstacles[i][1];
        if (map.has(x)) map.get(x).add(y);
        else map.set(x, new Set([y]));
    }
    let max = 0, x = 0, y = 0;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0, j = 0; i < commands.length; i++) {
        const command = commands[i];
        if (command === -2) {
            if (--j === -1) j = 3;
        } else if (command === -1) {
            if (++j === 4) j = 0;
        } else {
            const dx = dirs[j][0], dy = dirs[j][1];
            for (let n = 1; n <= command; n++) {
                const xx = x + dx, yy = y + dy;
                if (map.has(xx) && map.get(xx).has(yy)) break;
                x = xx, y = yy;
            }
        }
        max = Math.max(x * x + y * y, max);
    }
    return max;
}
