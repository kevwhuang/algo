// 1232 - Check If It Is a Straight Line

function checkStraightLine(coordinates) {
    const M = coordinates, r = M[0][0], c = M[0][1];
    const dr = M[1][0] - r, dc = M[1][1] - c;
    for (let i = 2; i < M.length; i++) {
        if (dc * (M[i][0] - r) !== dr * (M[i][1] - c)) return false;
    }
    return true;
}
