// 2109 - Adding Spaces to a String

function addSpaces(s, spaces) {
    const res = new Array(spaces.length + 1);
    res[0] = s.slice(0, spaces[0]);
    for (let i = 0; i < spaces.length; i++) {
        res[i + 1] = s.slice(spaces[i], spaces[i + 1]);
    }
    return res.join(' ');
}
