// 796 - Rotate String

function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    return s.repeat(2).includes(goal);
}
