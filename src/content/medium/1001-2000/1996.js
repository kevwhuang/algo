// 1996 - The Number of Weak Characters in the Game

function numberOfWeakCharacters(properties) {
    properties.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let weak = 0, max = 1;
    for (let i = properties.length - 1; ~i; i--) {
        if (properties[i][1] < max) weak++;
        else max = properties[i][1];
    }
    return weak;
}
