// 2211 - Count Collisions on a Road

function countCollisions(directions) {
    let l = 0;
    while (directions[l] === 'L') l++;
    let r = directions.length - 1;
    while (directions[r] === 'R') r--;
    let collisions = 0;
    while (l <= r) directions[l++] !== 'S' && collisions++;
    return collisions;
}
