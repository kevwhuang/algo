// 789 - Escape the Ghosts

function escapeGhosts(ghosts, target) {
    const distance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
    const x = target[0], y = target[1];
    const min = distance(0, 0, x, y);
    for (let i = 0; i < ghosts.length; i++) {
        if (distance(ghosts[i][0], ghosts[i][1], x, y) <= min) return false;
    }
    return true;
}
