// 1041 - Robot Bounded in Circle

function isRobotBounded(instructions) {
    let x = 0, y = 0, dir = 'N';
    for (let i = 0; i < instructions.length; i++) {
        switch (instructions[i]) {
            case 'G':
                switch (dir) {
                    case 'N': y++; break;
                    case 'S': y--; break;
                    case 'E': x++; break;
                    case 'W': x--;
                }
                break;
            case 'L':
                switch (dir) {
                    case 'N': dir = 'W'; break;
                    case 'S': dir = 'E'; break;
                    case 'E': dir = 'N'; break;
                    case 'W': dir = 'S';
                }
                break;
            case 'R':
                switch (dir) {
                    case 'N': dir = 'E'; break;
                    case 'S': dir = 'W'; break;
                    case 'E': dir = 'S'; break;
                    case 'W': dir = 'N';
                }
        }
    }
    if (x === 0 && y === 0) return true;
    return dir !== 'N';
}
