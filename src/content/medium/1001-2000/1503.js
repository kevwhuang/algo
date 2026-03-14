// 1503 - Last Moment Before All Ants Fall Out of a Plank

function getLastMoment(n, left, right) {
    return Math.max(Math.max(...left) || 0, (n - Math.min(...right)) || 0);
}
