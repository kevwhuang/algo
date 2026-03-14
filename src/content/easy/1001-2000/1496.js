// 1496 - Path Crossing

function isPathCrossing(path) {
    const seen = new Set(['0,0']);
    for (let r = 0, c = 0, i = 0; i < path.length; i++) {
        if (path[i] === 'N') r--;
        else if (path[i] === 'S') r++;
        else if (path[i] === 'E') c--;
        else c++;
        const key = `${r},${c}`;
        if (seen.has(key)) return true;
        seen.add(key);
    }
    return false;
}
