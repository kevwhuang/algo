// 1079 - Letter Tile Possibilities

function numTilePossibilities(tiles) {
    function backtrack() {
        for (const char in obj) {
            if (obj[char] === 0) continue;
            subsequences++;
            obj[char]--;
            backtrack();
            obj[char]++;
        }
    }
    const obj = {};
    for (let i = 0; i < tiles.length; i++) {
        obj[tiles[i]] ??= 0;
        obj[tiles[i]]++;
    }
    let subsequences = 0;
    backtrack();
    return subsequences;
}
