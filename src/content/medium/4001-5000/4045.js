// 4045. Count Robot Groups

function countGroups(position, speed, distance) {
    let res = 0;
    const n = speed.length - 1;
    for (let min = 1e9, i = n; ~i; i--) {
        if (i < n && position[i + 1] - position[i] <= distance) continue;
        if (speed[i] <= min) res++, min = speed[i];
    }
    return res;
}
