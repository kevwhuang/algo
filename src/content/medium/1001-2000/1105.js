// 1105 - Filling Bookcase Shelves

function minHeightShelves(books, shelfWidth) {
    const dp = new Uint32Array(books.length + 1).fill(-1);
    dp[0] = 0;
    for (let i = 1; i <= books.length; i++) {
        for (let a = 0, b = 0, j = i - 1; ~j; j--) {
            if ((a += books[j][0]) > shelfWidth) break;
            b = Math.max(books[j][1], b);
            dp[i] = Math.min(dp[j] + b, dp[i]);
        }
    }
    return dp.at(-1);
}
