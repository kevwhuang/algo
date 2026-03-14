// 2271 - Maximum White Tiles Covered by a Carpet

function maximumWhiteTiles(tiles, carpetLen) {
    tiles.sort((a, b) => a[0] - b[0]);
    let max = 1, window = 0, l = 0, r = 0;
    while (l < tiles.length && r < tiles.length) {
        if (tiles[l][0] + carpetLen > tiles[r][1]) {
            window += tiles[r][1] - tiles[r][0] + 1;
            max = Math.max(window, max);
            r++;
        } else {
            const cover = tiles[l][0] + carpetLen - tiles[r][0];
            max = Math.max(window + Math.max(0, cover), max);
            window -= tiles[l][1] - tiles[l][0] + 1;
            l++;
        }
    }
    return max;
}
