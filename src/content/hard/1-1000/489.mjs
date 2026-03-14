// 489 - Robot Room Cleaner

function cleanRoom(robot) {
    function backtrack(r, c, i) {
        if (seen.has(r) && seen.get(r).has(c)) return;
        if (!seen.has(r)) seen.set(r, new Set());
        seen.get(r).add(c);
        robot.clean();
        for (let j = 0; j < 4; j++) {
            if (robot.move()) {
                backtrack(r + D[i][0], c + D[i][1], i);
                robot.turnLeft();
                robot.turnLeft();
                robot.move();
                robot.turnLeft();
                robot.turnLeft();
            }
            robot.turnLeft();
            i = (i + 1) % 4;
        }
    }
    const seen = new Map();
    const D = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    backtrack(0, 0, 0);
}
