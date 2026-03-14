// 1784 - Check If Binary String Has at Most One Segment of Ones

function checkOnesSegment(s) {
    for (let flag, i = 1; i < s.length; i++) {
        if (s[i] === '0') flag = true;
        else if (flag) return false;
    }
    return true;
}
