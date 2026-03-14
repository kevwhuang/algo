// 2337 - Move Pieces to Obtain a String

function canChange(start, target) {
    let l = 0, r = 0;
    for (let i = 0; i < start.length; i++) {
        if (start[i] === 'L') l--;
        else if (start[i] === 'R') r++;
        if (r && start[i] === 'L') return false;
        if (r && target[i] === 'L') return false;
        if (target[i] === 'L') l++;
        else if (target[i] === 'R') r--;
        if (l === -1 || r === -1) return false;
    }
    return l === 0 && r === 0;
}
