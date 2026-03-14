// 733 - Flood Fill

function floodFill(image, sr, sc, color) {
    function dfs(r, c) {
        if (!validate(r, c)) return;
        if (image[r][c] !== tgt) return;
        if (image[r][c] === color) return;
        image[r][c] = color;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const tgt = image[sr][sc], m = image.length, n = image[0].length;
    dfs(sr, sc);
    return image;
}
