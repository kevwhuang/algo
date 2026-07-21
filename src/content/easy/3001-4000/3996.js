// 3996. Even Number of Knight Moves

function canReach(start, target) {
    return (start[0] + target[0]) % 2 === (start[1] + target[1]) % 2;
}
