// 2782 - Number of Unique Categories

function numberOfCategories(n, categoryHandler) {
    let dups = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!categoryHandler.haveSameCategory(i, j)) continue;
            dups++;
            break;
        }
    }
    return n - dups;
}
