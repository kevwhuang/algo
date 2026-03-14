// 1717 - Maximum Score From Removing Substrings

function maximumGain(s, x, y) {
    let cx = 'a', cy = 'b';
    if (y > x) [x, y, cx, cy] = [y, x, cy, cx];
    let points = 0, sx = 0, sy = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === cx) sx++;
        else if (s[i] === cy) {
            if (sx) points += x, sx--;
            else sy++;
        } else {
            points += y * Math.min(sx, sy);
            sx = sy = 0;
        }
    }
    return points + y * Math.min(sx, sy);
}
