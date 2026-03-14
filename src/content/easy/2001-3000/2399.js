// 2399 - Check Distances Between Same Letters

function checkDistances(s, distance) {
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + 97);
        const dist = s.lastIndexOf(char) - s.indexOf(char) - 1;
        if (dist !== -1 && dist !== distance[i]) return false;
    }
    return true;
}
